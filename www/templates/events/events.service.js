angular.module('LoopIn.events')

  .factory('EventsService', function($http, $localStorage, domain, api){
    var events = [];
    var http_url = domain + api.events;
    // var http_url = 'http://localhost:3000/api/events';

    return {
      all: function(){
        // console.log('email = ' + $localStorage.user.email)
        // console.log('token = ' + $localStorage.user.token)

        return $http.get(http_url, {})
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
