angular.module('LoopIn.events')

.controller('vendorsController', function($scope, $state, $localStorage, $ionicFilterBar) {
   $scope.vendors = [
     {id:1, name:'Land of Plenty', address:'208 E 58th St, New York, NY 10022', phone:'2123088788'},
     {id:2, name:'Hunan House', address:'40W 56th St, New York, NY 10019', phone:'2122132299'}
   ];
   $scope.filterBarInstance;

   $scope.rememberVendor = function(vendor){
     $localStorage.vendor  = vendor;
   }

   $scope.showFilterBar = function() {
     $scope.filterBarInstance = $ionicFilterBar.show({
       items: $scope.vendors,
       update: function(filteredItems){
         $scope.vendors = filteredItems;
       },
       filterProperties: 'name'
     });
   };

   $scope.showVendorMenu = function(vendorId){
     $state.go('tabs.events.vendors-menu', {
 			vendor_id: vendorId
 		});
   }

 })
