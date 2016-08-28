angular.module('LoopIn.user')
  .controller('userController', function($scope, $state, $ionicPopup, $localStorage, UserService) {

    $scope.user = {};
    $scope.showing = true;

    $scope.login = function(){
      console.log("TRY --> LOGIN user: " + $scope.user.username + " - PW: " + $scope.user.password);
      $scope.showing = false;

      UserService.login($scope.user.username, $scope.user.password).success(function(data){
        $localStorage.user.token = data.token;
        $localStorage.user.username = $scope.user.username;
        $state.go('tabs.events.features');
        $scope.showing = true;
      })
      .error(function(data){
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });

        $scope.showing = true;
      })


    }

    $scope.clearUserInfo = function(){
      $scope.user = {};
    }


  })
