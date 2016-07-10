angular.module('LoopIn.cart')
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
    return $scope.orderedItems.length > 99 ? "..." : $scope.orderedItems.length;
  };

})
