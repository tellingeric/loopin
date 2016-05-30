
angular.module('LoopIn.services', [])

  .factory('RestaurantMenu', function() {
    var RestaurantMenu = [
      {restaurantId:1, name:'Roast Duck', price:13.50},
      {restaurantId:1, name:'Pepper Steak', price:10.99},
      {restaurantId:2, name:'Dan Dan Noodle', price:7.50},
      {restaurantId:2, name:'Double Cooked Pork', price:14.99}
    ];

    return {
      all: function() {
        return RestaurantMenu;
      },
      get: function(restaurantId) {
        var menu = [];
        for (var i=0; i<RestaurantMenu.length; i++) {
          if (RestaurantMenu[i].restaurantId === parseInt(restaurantId)) {
            menu.push(RestaurantMenu[i])
          }
        }

        // angular.forEach(RestaurantMenu, function(menuItem) {
        //   if (menuItem.restaurantId == restaurantId) {
        //     menu.push(menuItem)
        //   }
        // });

        
        return menu;
      }
    };
  });
