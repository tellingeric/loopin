angular.module('LoopIn.cart')

  .factory('OrderedItems', function($localStorage) {
    $localStorage = $localStorage.$default({
      orderedItems: []
    });

    console.log('Cart SERVICE');
    
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
