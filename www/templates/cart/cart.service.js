angular.module('LoopIn.cart')

  .factory('OrderedItems', function($localStorage, $http, domain, api) {
    $localStorage = $localStorage.$default({
      orderedItems: []
    });

    console.log('CART SERVICE Init');


    return {
      all: function() {
        return $localStorage.orderedItems;
      },
      add: function(item) {
        $localStorage.orderedItems.push(item);
      },
      remove: function(item) {
        $localStorage.orderedItems.splice($localStorage.orderedItems.indexOf(item),1);
      },
      removeAll: function() {
        $localStorage.orderedItems = [];
      },
      count: function() {
        return $localStorage.orderedItems.length;
      },


      orderNow: function(){
        var order = {};
        order.products = [];

        angular.forEach($localStorage.orderedItems, function(item) {

          var selectedOptions = [];
          angular.forEach(item.product_id.details[0].options, function(opt){
            selectedOptions.push({
              name: opt.name,
              selections: opt.selected,
              isMultiple: opt.isMultiple
            })
          })

          order.products.push({
            event: item.event,
            num_sold: item.orderedQuantity,
            unit_price: item.unit_price,
            product_id: item.product_id._id,
            product_vid: item.product_vid,
            options: selectedOptions
          });
        });


        order.delivery_address = {
          street1 : 'cao in ma b',
          street2 : 'cao in ma b',
          city : 'cao in ma b',
          state : 'cao',
          zipCode : '6666',
          country : 'cnm'
        };

        order.buyer = $localStorage.user._id;
        order.order_date = Date.now();


        return $http.post(domain + api.orders, order)
          .success(function(data, status, headers, config){
            console.log('ORDER post success');
            return data;
          })
          .error(function(data, status, headers, config){
            console.log('ORDER post error');
            console.log(JSON.stringify(data));
          });
      }



    };
  })

  .factory('HistoricalOrders', function($localStorage, $http, domain, api) {
    var historicalOrders = [];
    return {
      all: function() {

        $http.defaults.headers.common['x-access-token'] = $localStorage.user.token

        return $http.get(domain + api.historicalOrders + $localStorage.user._id, {})
          .success(function(data, status, headers, config){
            console.log('ORDERS GET ALL data success');
            historicalOrders = data;
            return data;
          })
          .error(function(data, status, headers, config){
            console.log('data error');
          });


      },

      get: function(orderId){
        var data;
        angular.forEach(historicalOrders, function(ho) {
          if (ho._id == orderId) {
            data = ho;
          }
        });
        return data;
      }



    };
  })
