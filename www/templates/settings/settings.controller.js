angular.module('LoopIn.settings')
  .controller('settingsController', function($scope, $state, $localStorage, UserService) {

    $scope.token = $localStorage.user.token;

    $scope.logout = function(){
      $localStorage.user.token = UserService.logout();

      $state.go('login');
    }


  })
