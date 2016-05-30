
angular.module('LoopIn.controllers',[])

  .controller('restaurantsController', function($scope, $ionicTabsDelegate) {
     $scope.restaurants = [
       {id:1, name:'Land of Plenty', address:'208 E 58th St, New York, NY 10022', phone:'2123088788'},
       {id:2, name:'Hunan House', address:'40W 56th St, New York, NY 10019', phone:'2122132299'}
     ];

     //
    //  $scope.selectTabWithIndex = function(index) {
    //    $ionicTabsDelegate.select(index);
    //  };

   })

   .controller('menuController', function($scope, $stateParams, RestaurantMenu){
     $scope.menu = RestaurantMenu.get($stateParams.restaurantId);
   })


  //  .controller('menuController', function($scope, $stateParams) {
  //     $scope.items = [
  //       {name:'beef'},
  //       {name:'vegie'}
  //     ];
   //
  //   })

    .controller('cartController', function($scope) {
      $scope.items = []

      $scope.addItem = function(itemName) {
        window.alert('!')
        $scope.items.push({name:itemName});
      };

      $scope.TotalItemNumber = function(){
        return $scope.items.length;
      };

      $scope.RemoveAllItems = function(){
        $scope.items = [];
      };

    })
