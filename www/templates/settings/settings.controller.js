angular.module('LoopIn.settings')
  .controller('settingsController', function($scope, $state) {

    $scope.logout = function(){
      $state.go('login');
    }



  })
