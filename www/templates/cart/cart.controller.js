angular.module('LoopIn.cart')
.controller('cartController', function($scope, $state, OrderedItems) {
  $scope.orderedItems = OrderedItems.all();

  $scope.shownPm = null;
  $scope.paymentMethods = [{
    method: "Pay by cash",
    icon: "ion-cash",
    text: "Please prepare for the exact amount, change will be limited.<br>请自备零钱，谢谢"
  }, {
    method: "Pay by card",
    icon: "ion-card",
    text: "card #"
  }];



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

  $scope.gotoPayment = function(){
    $state.go('tabs.cart.current-payment');
  }


  $scope.togglePaymentMethod = function(pm) {
   if ($scope.isPaymentMethodShown(pm)) {
     $scope.shownPm = null;
   } else {
     $scope.shownPm = pm;
   }
 };

 $scope.isPaymentMethodShown = function(pm) {
   return $scope.shownPm === pm;
 };


})
