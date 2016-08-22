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
	          abstract: true
	        }
      	}
    	})

      .state('tabs.cart.current', {
        url: '/current',
        views: {
          'tabs-cart-current': {
            templateUrl: 'templates/cart/current.html',
            controller: 'cartController'
          }
        }
      })


      .state('tabs.cart.current-payment', {
	      url:'/current/payment.html',
	      views:{
	        'tabs-cart-current':{
	          templateUrl:'templates/cart/payment.html',
	          controller:'cartController'
	        }
      	}
    	})


      .state('tabs.cart.history', {
        url: '/history',
        views: {
          'tabs-cart-history': {
            templateUrl: 'templates/cart/history.html',
            controller: 'cartController'
          }
        }
      })


      .state('tabs.cart.history-details', {
          url: '/history/:order_id',
          views: {
              'tabs-cart.history': {
                  templateUrl: 'templates/cart/order-details.html',
                  controller:'featuresController'
              }
          }
      })


  })

// })();
