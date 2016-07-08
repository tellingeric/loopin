
angular.module('LoopIn.controllers',[])

.controller('restaurantsController', function($scope, $localStorage, $ionicFilterBar) {
   $scope.restaurants = [
     {id:1, name:'Land of Plenty', address:'208 E 58th St, New York, NY 10022', phone:'2123088788'},
     {id:2, name:'Hunan House', address:'40W 56th St, New York, NY 10019', phone:'2122132299'}
   ];
   $scope.filterBarInstance;

   $scope.rememberRestaurant = function(restaurant){
     $localStorage.restaurant  = restaurant;
   }

   $scope.showFilterBar = function() {
     $scope.filterBarInstance = $ionicFilterBar.show({
       items: $scope.restaurants,
       update: function(filteredItems){
         $scope.restaurants = filteredItems;
       },
       filterProperties: 'name'
     });
   };

 })

 .controller('menuController', function($scope, $stateParams, $localStorage, $ionicFilterBar, RestaurantMenu, OrderedItems){
   $scope.menu = RestaurantMenu.get($stateParams.restaurantId);
   $scope.restaurant = $localStorage.restaurant;

   $scope.orderThis = function(item) {
     OrderedItems.add(item);
   };

   $scope.showFilterBar = function() {
     $scope.filterBarInstance = $ionicFilterBar.show({
       items: $scope.menu,
       update: function(filteredItems){
         $scope.menu = filteredItems;
       },
       filterProperties: 'name'
     });
   };

   $scope.numOfOrders = function(item){
     var orderedItems = OrderedItems.all();
     var count = 0;
     angular.forEach(orderedItems, function(oItem) {
       if (oItem.id == item.id) count ++;
     });
     return count == 0 ? "" : count;
   };


 })


  .controller('cartController', function($scope, OrderedItems) {
    $scope.orderedItems = OrderedItems.all();

    $scope.RemoveAllItems = function(){
      OrderedItems.removeAll();
      $scope.orderedItems = [];
    };

    $scope.removeThis = function(item) {
      OrderedItems.remove(item);
      $scope.orderedItems = OrderedItems.all();
    };

    $scope.TotalPrice = function(){
      var sumPrice = 0;
      angular.forEach($scope.orderedItems, function(item) {
        sumPrice += item.price;
      });
      return sumPrice.toFixed(2);
    };

    $scope.badgeCount = function(){
      return $scope.orderedItems.length > 9 ? "..." : $scope.orderedItems.length;
    };

  })

  .controller('settingsController', function($scope) {

  })

  .controller('eventsController', function($scope, $ionicLoading, $stateParams, $ionicFilterBar, EventList) {

    $scope.events;

    $scope.getAllEvents = function() {
      $ionicLoading.show();
      EventList.all().success(function(response){
        $scope.events = response;
        $ionicLoading.hide();
      });
    };

    $scope.showFilterBar = function() {
      $scope.filterBarInstance = $ionicFilterBar.show({
        items: $scope.events,
        update: function(filteredItems){
          $scope.events = filteredItems;
        },
        filterProperties: 'Name'
      });
    };

  })
