angular.module('LoopIn.events')

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
