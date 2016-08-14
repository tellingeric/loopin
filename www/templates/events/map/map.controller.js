angular.module('LoopIn.events')

  .controller('mapController',
    function(
      $scope,
      $stateParams,
      $state,
      $ionicLoading,
      $localStorage,
      NgMap,
      EventsService
    ){


      $scope.getRandomColor = function(){
        return '#'+Math.random().toString(16).substr(-6);
      }

    })
