
angular.module('LoopIn.controllers',[])

.controller('restaurantsController', function($scope, $ionicTabsDelegate) {
   $scope.restaurants = [
     {id:1, name:'Land of Plenty', address:'208 E 58th St, New York, NY 10022', phone:'2123088788'},
     {id:2, name:'Hunan House', address:'40W 56th St, New York, NY 10019', phone:'2122132299'}
   ];
 })

 .controller('menuController', function($scope, $stateParams, RestaurantMenu){
   $scope.menu = RestaurantMenu.get($stateParams.restaurantId);
 })


  .controller('cartController', function($scope) {
    $scope.orderedItems = [];
    // $scope.orderedItem = {};
    //
    // $scope.getItems = function() {
    //   if (localStorageService.get(orderedItems)) {
    //     $scope.orderedItems = localStorageService.get(orderedItems);
    //   } else {
    //     $scope.orderedItems = [];
    //   }
    // };
    //
    // $scope.addItem = function() {
    //   $scope.orderedItems.push($scope.ordereditems.push($scope.orderedItem));
    //   localStorageService.set(orderedItems, $scope.orderedItems);
    //   $scope.orderedItem = {};
    // };

    $scope.TotalItemNumber = function(){
      return $scope.orderedItems.length;
    };

    $scope.RemoveAllItems = function(){
      $scope.orderedItems = [];
    };

  })
