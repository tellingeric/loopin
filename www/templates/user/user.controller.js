angular.module('LoopIn.user')
  .controller('userController', userController)

  function userController(
    $scope,
    $state,
    $ionicPopup,
    $ionicModal,
    $mdToast,
    $localStorage,
    UserService
  ) {

    $scope.user = {};
    $scope.modal = {};
    $scope.showing = true;
    $scope.register = false;

    $scope.showSimpleToast = function(msg) {
      $mdToast.show(
        $mdToast.simple()
          .textContent(msg)
          .position('top left')
          .hideDelay(3000)
      );
    };

    $scope.login = function(){
      console.log("TRY --> LOGIN user: " + $scope.user.username + " - PW: " + $scope.user.password);
      $scope.showing = false;

      UserService.login($scope.user.username, $scope.user.password).success(function(data){

        UserService.getUserInfo().success(function(data){
          $localStorage.user._id = data._id;
          $localStorage.user.email = data.email;
          $localStorage.user.username = data.username;

        });

        $localStorage.user.token = data.token;
        $scope.showSimpleToast('Welcome back!');
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
    };

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
    };


    $scope.GetResetToken = function(){
      UserService.forgetPassword($scope.user.email).success(function(data){
        if (data.success)
          $scope.showSimpleToast('Please Enter Token Below.');
        else
          $scope.showSimpleToast(data.message);

      })
      .error(function(data){
        $scope.showSimpleToast(data.message);
      })
    };

    $scope.ResetPassword = function(){
      UserService.resetPassword($scope.user.resetToken, $scope.user.newPassword).success(function(data){
        if (data.success){
          $scope.showSimpleToast('Success! Please login again.');
          $scope.closeModal();
        }
        else
          $scope.showSimpleToast(data.message);

      })
      .error(function(data){
        $scope.showSimpleToast(data.message);
      })
    };

    $scope.clearUserInfo = function(){
      $scope.user = {};
    };

    $scope.showRegisterForm = function(s){
      $scope.register = s;
    };


    $ionicModal.fromTemplateUrl('templates/user/forgetPwd.modal.html', {
      scope: $scope,
      controller: userController,
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
      $scope.clearUserInfo();
    });

  }
