angular.module('LoopIn.events')

  // .factory('VendorMenu', function() {
  //   var vendorMenuSample = [
  //     {id:1, vendorId:1, name:'Roast Duck', price:13.50, options:[{spicy: 'none'}]},
  //     {id:2, vendorId:1, name:'Pepper Steak', price:10.99, options:[{spicy: 'mild'}]},
  //     {id:3, vendorId:2, name:'Dan Dan Noodle', price:7.50, options:[{spicy: 'medium'}]},
  //     {id:4, vendorId:2, name:'Double Cooked Pork', price:14.99, options:[{spicy: 'hot'}]}
  //   ];
  //
  //   return {
  //     all: function() {
  //       return vendorMenuSample;
  //     },
  //
  //     get: function(vendorId) {
  //       var menu = [];
  //       angular.forEach(vendorMenuSample, function(menuItem) {
  //         if (menuItem.vendorId == vendorId) {
  //           menu.push(menuItem)
  //         }
  //       });
  //       return menu;
  //     }
  //   };
  //
  //
  // })

  .factory('VendorsService', function($http, $localStorage, domain, api){
    var vendors = [];

    return {
      all: function(){

        $http.defaults.headers.common['x-access-token'] = $localStorage.user.token

        return $http.get(domain + api.vendors, {})
          .success(function(data, status, headers, config){
            console.log('Vendors GET ALL data success');
            // console.log(JSON.stringify(data));
            vendors = data;
            return data;
          })
          .error(function(data, status, headers, config){
            console.log('data error');
          });
      },

      get: function(vendorId){
        var data;
        angular.forEach(vendors, function(v) {
          if (v._id == vendorId) {
            data = v;
          }
        });
        return data;
      }

    };

  })
