
angular.module('LoopIn.services', [])

  .factory('RestaurantMenu', function() {
    var restaurantMenu = [
      {id:1, restaurantId:1, name:'Roast Duck', price:13.50},
      {id:2, restaurantId:1, name:'Pepper Steak', price:10.99},
      {id:3, restaurantId:2, name:'Dan Dan Noodle', price:7.50},
      {id:4, restaurantId:2, name:'Double Cooked Pork', price:14.99}
    ];

    return {
      all: function() {
        return restaurantMenu;
      },
      get: function(restaurantId) {
        var menu = [];
        // for (var i=0; i<restaurantMenu.length; i++) {
        //   if (restaurantMenu[i].restaurantId === parseInt(restaurantId)) {
        //     menu.push(restaurantMenu[i])
        //   }
        // }

        angular.forEach(restaurantMenu, function(menuItem) {
          if (menuItem.restaurantId == restaurantId) {
            menu.push(menuItem)
          }
        });

        return menu;
      }
    };
  })



  .factory('OrderedItems', function($localStorage) {
    $localStorage = $localStorage.$default({
      orderedItems: []
    });

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
      }
    };
  })


  .factory('Restaurants', function($localStorage, $http) {

    // return {
    //   all: function(){
    //     return $http.get('https://loopin-api.herokuapp.com/api/vendors', {params: {} })
    //       .success(function(data, status, headers, config){
    //         console.log('data success');
    //         console.log(JSON.stringify(data));
    //         return data;
    //       })
    //       .error(function(data, status, headers, config){
    //         console.log('data error');
    //       });
    //
    //   }
    //
    // };


  })


  .factory('EventList', function($http){
    var events = [];

    return {
      all: function(){
        return $http.get('https://loopin-api.herokuapp.com/api/events', {params: {} })
          .success(function(data, status, headers, config){
            console.log('data success');
            console.log(JSON.stringify(data));
            events = data;
            return data;
          })
          .error(function(data, status, headers, config){
            console.log('data error');
          });
      },

      get: function(eventId){
        angular.forEach(events, function(event) {
          if (event._id == eventId) {
            return event;
          }
        });
      }

    };

  })
