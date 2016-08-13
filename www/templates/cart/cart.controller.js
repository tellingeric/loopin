angular.module('LoopIn.cart')
.controller('cartController', function($scope, OrderedItems) {
  $scope.orderedItems = OrderedItems.all();

  $scope.RemoveAllItems = function(){
    OrderedItems.removeAll();
    $scope.orderedItems = OrderedItems.all();
  };

  $scope.removeThis = function(item) {
    OrderedItems.remove(item);
    $scope.orderedItems = OrderedItems.all();
  };

  $scope.TotalPrice = function(){
    var sumPrice = 0;
    angular.forEach($scope.orderedItems, function(item) {
      sumPrice += item.product_id.details[0].price * item.orderedQuantity;
    });
    return sumPrice.toFixed(2);
  };

  $scope.badgeCount = function(){
    return $scope.orderedItems.length > 99 ? "..." : $scope.orderedItems.length;
  };

  $scope.changeQuantityAdd = function(item){
    item.orderedQuantity++;
  }

  $scope.changeQuantityMinus = function(item){
    if(item.orderedQuantity > 1){
      item.orderedQuantity = Number(item.orderedQuantity) -1;
    }
  }

})
