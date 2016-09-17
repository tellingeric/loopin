angular.module('LoopIn.user')
  .controller('userController', function(
    $scope,
    $state,
    $ionicPopup,
    $ionicModal,
    $localStorage,
    UserService
  ) {

    $scope.user = {};
    $scope.modal = {};
    $scope.showing = true;
    $scope.register = false;

    $scope.login = function(){
      console.log("TRY --> LOGIN user: " + $scope.user.username + " - PW: " + $scope.user.password);
      $scope.showing = false;

      UserService.login($scope.user.username, $scope.user.password).success(function(data){

        UserService.getUserInfo().success(function(data){
          // console.log(JSON.stringify(data));
          $localStorage.user._id = data._id;
          $localStorage.user.email = data.email;
          $localStorage.user.username = data.username;
          
        });

        $localStorage.user.token = data.token;

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

    $scope.createUser = function(){
      console.log("TRY --> Register user: " + $scope.user.username + " - PW: " + $scope.user.password);
      $scope.showing = false;

      UserService.registerUser($scope.user.username, $scope.user.password, $scope.user.email).success(function(data){
        $localStorage.user.token = data.token;
        $localStorage.user.username = $scope.user.username;
        $state.go('tabs.events.features');
        $scope.showing = true;

      })
      .error(function(data){
        var alertPopup = $ionicPopup.alert({
          title: 'Register failed!',
          template: 'Please check your details!'
        });

        $scope.showing = true;
      })
    }

    $scope.clearUserInfo = function(){
      $scope.user = {};
    }

    $scope.showRegisterForm = function(s){
      $scope.register = s;
    }


    $ionicModal.fromTemplateUrl('templates/user/forgetPwd.modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

  })
