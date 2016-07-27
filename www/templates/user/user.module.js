
  angular.module('LoopIn.user', [
    ])

  .config(function($stateProvider) {
		$stateProvider
	    .state('login', {
	      url:'/login',
        templateUrl:'templates/user/login.html',
        controller:'userController'
    	})


  })
