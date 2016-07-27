angular.module('LoopIn.user')
  .controller('userController', function($scope, $state) {

    console.log("login page");


    $scope.login = function(){
      $state.go('tabs.events.features');
    }


  })
