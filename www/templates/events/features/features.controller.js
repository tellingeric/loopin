angular.module('LoopIn.events')

  .controller('featuresController',
    function(
      $scope,
      $stateParams,
      $state,
      $ionicLoading,
      $ionicFilterBar,
      $ionicModal,
      $localStorage,
      $ionicModal,
      $mdToast,
      $compile,
      NgMap,
      EventsService,
      OrderedItems
    ){

      $scope.events = [];
      $scope.event = EventsService.get($stateParams.event_id);
      $scope.data = {};
      $scope.map = {};
      $scope.modal = {};
      $scope.product = {};



      // console.log(JSON.stringify($scope.event));

      // if ($stateParams.event_id != null) {
      //   $ionicLoading.show();
      //   EventsService.get($stateParams.event_id).then(function(response){
      //     $scope.event = response;
      //     $ionicLoading.hide();
      //   });
      // }

      $scope.showSimpleToast = function(msg) {
        $mdToast.show(
          $mdToast.simple()
            .textContent(msg)
            .position('bottom')
            .hideDelay(1000)
        );
      };


      $ionicModal.fromTemplateUrl('templates/events/features/product.modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.openModal = function(product) {
        $scope.product = product;
        $scope.product.orderedQuantity = 1;
        $scope.product.options = product.product_id.details[0].options;

        angular.forEach($scope.product.options, function(opt) {
          // opt.isMultiple ? opt.selected = [] : opt.selected = {};
          opt.selected = [];
        })

        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      // Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
        $scope.product = {};
      });
      // Execute action on hide modal
      $scope.$on('modal.hidden', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });


      // Desc toggle
      $scope.toggleDesc = function(desc) {
        if ($scope.isDescShown(desc)) {
          $scope.shownDesc = null;
        } else {
          $scope.shownDesc = desc;
        }
      };

      $scope.isDescShown = function(desc) {
        return $scope.shownDesc === desc;
      };
      // ======================================



      $scope.mapInitCallBack = function(map){
          $scope.map = map;
      }



      $scope.getAllEvents = function() {
        $ionicLoading.show();
        EventsService.all().success(function(data){
          $scope.events = data;
          $ionicLoading.hide();
        })
        .error(function(data){
          $ionicLoading.hide();
        });
      };

      $scope.showFilterBar = function() {
        $scope.filterBarInstance = $ionicFilterBar.show({
          items: $scope.events,
          update: function(filteredItems){
            $scope.events = filteredItems;
          },
          filterProperties: 'Name'
        });
      };

      $scope.showEventDetails = function(eventId){
        $state.go('tabs.events.features-details', {
    			event_id: eventId
    		});
      }

      $scope.showLocationChooser = function(){
        $state.go('tabs.events.features-location');
      }


     $scope.orderThis = function(product, event_id){

       product.event = event_id;
       if(product.orderedQuantity) OrderedItems.add(product);

      //  $scope.toggleProduct(null);

      $scope.closeModal();

     }

     $scope.updateProductOptions = function(name, selection, isMultiple){
       var idx = $scope.product.options.map(function(e) { return e.name; }).indexOf(name);
       var subidx;

       if(isMultiple){
         subidx = $scope.product.options[idx].indexOf(selection)
         if(subidx > -1){
            $scope.product.options[idx].selected.splice(idx,1);
          }
          else {
            $scope.product.options[idx].selected.push(selection);
          }
       }
       else{
         $scope.product.options[idx].selected = [selection];
       }
     }




    })
