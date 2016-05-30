
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
  //
  // .factory('OrderedItems', function() {
  //   var orderedItems =[];
  //
  //   return {
  //     all: function() {
  //       return orderedItems;
  //     },
  //     add: function(itemId) {
  //       orderedItems.push(itemId);
  //     }
  //     remove: function(itemId) {
  //       orderedItems.splice(orderedItems.indexOf(itemId),1);
  //     }
  //     removeAll: function() {
  //       orderedItems = [];
  //     }
  //   }
  // })
