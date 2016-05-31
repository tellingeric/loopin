
angular.module('LoopIn.controllers',[])

.controller('restaurantsController', function($scope, $ionicTabsDelegate, $localStorage) {
   $scope.restaurants = [
     {id:1, name:'Land of Plenty', address:'208 E 58th St, New York, NY 10022', phone:'2123088788'},
     {id:2, name:'Hunan House', address:'40W 56th St, New York, NY 10019', phone:'2122132299'}
   ];

   $scope.rememberRestaurant = function(restaurant){
     $localStorage.restaurant  = restaurant;
   }

 })

 .controller('menuController', function($scope, $stateParams, $localStorage, RestaurantMenu, OrderedItems){
   $scope.menu = RestaurantMenu.get($stateParams.restaurantId);
   $scope.restaurant = $localStorage.restaurant;

   $scope.orderThis = function(item) {
     OrderedItems.add(item);
   };

 })


  .controller('cartController', function($scope, OrderedItems) {
    $scope.orderedItems = OrderedItems.all();

    $scope.RemoveAllItems = function(){
      OrderedItems.removeAll();
      $scope.orderedItems = [];
    };

    $scope.TotalPrice = function(){
      var sumPrice = 0;
      angular.forEach($scope.orderedItems, function(item) {
        sumPrice += item.price;
      });
      return sumPrice.toFixed(2);
    }
  })
