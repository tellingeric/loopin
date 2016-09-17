angular.module('LoopIn.events')

  .factory('EventsService', function($http, $localStorage, domain, api){
    var events = [];

    return {
      all: function(){

        // $http.defaults.headers.common['x-access-token'] = $localStorage.user.token

        return $http.get(domain + api.events, {})
          .success(function(data, status, headers, config){
            console.log('EVENTS GET ALL data success');
            // console.log(JSON.stringify(data));
            events = data;
            return data;
          })
          .error(function(data, status, headers, config){
            console.log('data error');
          });
      },

      get: function(eventId){
        var data;
        angular.forEach(events, function(event) {
          if (event._id == eventId) {
            data = event;
          }
        });
        return data;
      }

    };

  })
