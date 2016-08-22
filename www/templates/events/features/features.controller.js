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



      console.log(JSON.stringify($scope.event));

      // if ($stateParams.event_id != null) {
      //   $ionicLoading.show();
      //   EventsService.get($stateParams.event_id).then(function(response){
      //     $scope.event = response;
      //     $ionicLoading.hide();
      //   });
      // }


      $ionicModal.fromTemplateUrl('templates/events/features/product.modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.openModal = function(product) {
        $scope.product = product;
        $scope.product.orderedQuantity = 1;
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

     //
    //   $scope.toggleProduct = function(product) {
    //    if ($scope.isProductDetailShown(product)) {
    //      $scope.shownDetail = null;
    //    } else {
    //      $scope.shownDetail = product;
    //    }
    //  };
     //
    //  $scope.isProductDetailShown = function(product) {
    //    return $scope.shownDetail === product;
    //  };


     $scope.orderThis = function(product){

       if(product.orderedQuantity) OrderedItems.add(product);

      //  $scope.toggleProduct(null);

      $scope.closeModal();

     }



    })
