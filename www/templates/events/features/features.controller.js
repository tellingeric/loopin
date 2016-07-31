angular.module('LoopIn.events')

.controller('featuresController', function($scope, $ionicLoading, $stateParams, $state, $ionicFilterBar, $localStorage, EventsService) {

  $scope.events = [];
  $scope.event = EventsService.get($stateParams.event_id);

  console.log(JSON.stringify($scope.event));

  // if ($stateParams.event_id != null) {
  //   $ionicLoading.show();
  //   EventsService.get($stateParams.event_id).then(function(response){
  //     $scope.event = response;
  //     $ionicLoading.hide();
  //   });
  // }


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


  $scope.toggleProduct = function(product) {
   if ($scope.isProductDetailShown(product)) {
     $scope.shownDetail = null;
   } else {
     $scope.shownDetail = product;
   }
 };

 $scope.isProductDetailShown = function(product) {
   return $scope.shownDetail === product;
 };



})
