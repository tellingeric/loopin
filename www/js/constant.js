angular.module('LoopIn.constant', [
  'ionic'
])

.constant('domain', 'https://loopin-api.herokuapp.com/')
// .constant('domain', 'http://localhost:3000/')


.constant('api', {
  'login' : 'login',
  'register' : 'register',
  'events' : 'api/events'

})
