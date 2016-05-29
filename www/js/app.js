// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('LoopIn', ['ionic'])

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


app.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider) {

  $ionicConfigProvider.platform.android.tabs.position("bottom");

  $stateProvider
    .state('tabs', {url:"/tab", abstract:true, templateUrl:"templates/tabs.html"})
    .state('tabs.restaurants', {url:"/restaurants", views:{'restaurants-tab':{templateUrl:"templates/restaurants.html"}}})
    .state('tabs.menu', {url:"/menu", views:{'menu-tab':{templateUrl:"templates/menu.html"}}})
    .state('tabs.cart', {url:"/cart", views:{'cart-tab':{templateUrl:"templates/cart.html"}}});

  $urlRouterProvider.otherwise("/tab/restaurants")
})


app.controller('restaurantsController', function($scope, $ionicTabsDelegate) {
   var restaurantsList = this;
   restaurantsList.restaurants = [
     {name:'Land of Plenty', address:'208 E 58th St, New York, NY 10022', phone:'2123088788'},
     {name:'Hunan House', address:'40W 56th St, New York, NY 10019', phone:'2122132299'}
   ];

   $scope.selectTabWithIndex = function(index) {
     $ionicTabsDelegate.select(index);
   }
 })


app.controller('menuController', function() {
   var menu = this;
   menu.items = [
     {name:'beef'},
     {name:'vegie'}
   ];

 })


app.controller('cartController', function() {
  var cart = this;
  cart.items = []

  cart.addItem = function(itemName) {
    window.alert('!')
    cart.items.push({name:itemName});
  };

  cart.TotalItemNumber = function(){
    return cart.items.length;
  };

  cart.RemoveAllItems = function(){
    cart.items = [];
  };

})
