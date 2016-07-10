// (function() {
// 	'use strict';

  angular.module('LoopIn.cart', [
		'ionic'
    ])
  .config(function($stateProvider) {
		$stateProvider
	    .state('tabs.cart', {
	      url:'/cart',
	      views:{
	        'tab-cart':{
	          templateUrl:'templates/cart/tab-cart.html',
	          controller:'cartController'
	        }
      	}
    	})
  })

// })();
