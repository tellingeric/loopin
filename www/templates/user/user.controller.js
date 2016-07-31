angular.module('LoopIn.user')
  .controller('userController', function($scope, $state, $ionicPopup, $localStorage, UserService) {

    $scope.user = {};


    $scope.login = function(){
      console.log("TRY --> LOGIN user: " + $scope.user.email + " - PW: " + $scope.user.password);

      UserService.login($scope.user.email, $scope.user.password).success(function(data){
        $localStorage.user.token = data.token;
        $state.go('tabs.events.features');
      })
      .error(function(data){
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });

      })
    }

    $scope.clearUserInfo = function(){
      $scope.user = {};
    }


  })
