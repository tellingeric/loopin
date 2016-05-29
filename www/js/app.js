// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('LoopIn', ['ionic', 'LoopIn.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider) {

  $ionicConfigProvider.platform.android.tabs.position('bottom');

  $stateProvider
    .state('tabs', {url:'/tab', abstract:true, templateUrl:'templates/tabs.html'})
    .state('tabs.restaurants', {url:'/restaurants', views:{'tab-restaurants':{templateUrl:'templates/tab-restaurants.html', controller:'restaurantsController'}}})
    .state('tabs.menu', {url:'/menu', views:{'tab-menu':{templateUrl:'templates/tab-menu.html', controller:'menuController'}}})
    .state('tabs.cart', {url:'/cart', views:{'tab-cart':{templateUrl:'templates/tab-cart.html', controller:'cartController'}}});

  $urlRouterProvider.otherwise('/tab/restaurants')
})
