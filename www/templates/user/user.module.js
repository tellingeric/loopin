
  angular.module('LoopIn.user', [
    'LoopIn.constant'
    ])

  .config(function($stateProvider) {
		$stateProvider
	    .state('login', {
	      url:'/login',
        cache: false,
        templateUrl:'templates/user/login.html',
        controller:'userController'
      })


  })
