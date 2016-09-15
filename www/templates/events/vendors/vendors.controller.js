angular.module('LoopIn.events')

.controller('vendorsController', function(
  $scope,
  $state,
  $stateParams,
  $localStorage,
  $ionicFilterBar,
  $ionicLoading,
  VendorsService

) {

   $scope.vendors = [];
   $scope.vendor = VendorsService.get($stateParams.vendor_id);

   $scope.filterBarInstance;


   $scope.getAllVendors = function() {
     $ionicLoading.show();
     VendorsService.all().success(function(data){
       $scope.vendors = data;
       $ionicLoading.hide();
     })
     .error(function(data){
       $ionicLoading.hide();
     });
   };



  //  $scope.rememberVendor = function(vendor){
  //    $localStorage.vendor  = vendor;
  //  }

   $scope.showFilterBar = function() {
     $scope.filterBarInstance = $ionicFilterBar.show({
       items: $scope.vendors,
       update: function(filteredItems){
         $scope.vendors = filteredItems;
       },
       filterProperties: 'name'
     });
   };

   $scope.showVendorDetails = function(vendorId){
     $state.go('tabs.events.vendor-details', {
 			vendor_id: vendorId
 		});
   }

 })
