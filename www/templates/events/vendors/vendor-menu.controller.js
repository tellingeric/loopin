
angular.module('LoopIn.events')

  .controller('menuController', function($scope, $stateParams, $localStorage, $ionicFilterBar, VendorMenu, OrderedItems){
    $scope.menu = VendorMenu.get($stateParams.vendor_id);

    console.log('asdfasdf');
    // $scope.vendor = $localStorage.vendor;

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

    $scope.toggleMenuItem = function(item) {
     if ($scope.isOptionsShown(item)) {
       $scope.shownOptions = null;
     } else {
       $scope.shownOptions = item;
     }
   };

   $scope.isOptionsShown = function(item) {
     return $scope.shownOptions === item;
   };


 })
