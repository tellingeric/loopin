angular.module('LoopIn.events')

.controller('featuresController', function($scope, $ionicLoading, $stateParams, $state, $ionicFilterBar, EventList) {

  $scope.events;

  $scope.getAllEvents = function() {
    $ionicLoading.show();
    EventList.all().success(function(response){
      $scope.events = response;
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

})
