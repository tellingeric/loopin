// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('LoopIn', ['ionic','ngStorage','jett.ionic.filter.bar','LoopIn.controllers','LoopIn.services'])

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
    .state('tabs', {
      url:'/tab',
      abstract:true,
      templateUrl:'templates/tabs.html'
    })

    .state('tabs.restaurants', {
      url:'/restaurants',
      views:{
        'tab-restaurants':{
          templateUrl:'templates/restaurants/tab-restaurants.html',
          controller:'restaurantsController'
        }
      }})

    .state('tabs.restaurant-menu', {
      url:'/restaurants/:restaurantId',
      views:{
        'tab-restaurants':{
          templateUrl:'templates/restaurants/restaurant-menu.html',
          controller:'menuController'
        }
      }})


    .state('tabs.cart', {
      url:'/cart',
      views:{
        'tab-cart':{
          templateUrl:'templates/cart/tab-cart.html',
          controller:'cartController'
        }
      }})

    .state('tabs.settings', {
      url:'/settings',
      views:{
        'tab-settings':{
          templateUrl:'templates/settings/tab-settings.html',
          controller:'settingsController'
        }
      }})


      .state('tabs.events', {
          url: '/events',
          views: {
              'tab-events': {
                  templateUrl: 'templates/events/tab-events.html',
                  abstract: true
              }
          }
      })

      .state('tabs.events.today', {
          url: '/today',
          views: {
              'tabs-events-today': {
                  templateUrl: 'templates/events/events-today.html',
                  controller:'eventsController'
              }
          }
      })

      .state('tabs.events.details', {
          url: '/details/:event_id',
          views: {
              'tabs-events-today': {
                  templateUrl: 'templates/events/events-details.html',
                  controller:'eventsController'
              }
          }
      })

      .state('tabs.events.restaurants', {
          url: '/restaurants',
          views: {
              'tabs-events-restaurants': {
                  templateUrl: 'templates/events/events-restaurants.html',
                  controller:'restaurantsController'
              }
          }
      })

      .state('tabs.events.restaurants-menu', {
          url: '/restaurants/:restaurantId',
          views: {
              'tabs-events-restaurants': {
                  templateUrl: 'templates/events/events-restaurants-menu.html',
                  controller:'menuController'
              }
          }
      })

  $urlRouterProvider.otherwise('/tab/events');

});
