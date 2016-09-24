angular.module('LoopIn.constant', [
  'ionic'
])

.constant('domain', 'https://loopin-api.herokuapp.com/')
// .constant('domain', 'http://localhost:3000/')


.constant('api', {
  'login' : 'login',
  'logout' : 'api/logout',
  'register' : 'register',
  'forgetPassword': 'forgetPassword',
  'resetPassword': 'reset/',
  'me': 'api/me',


  'events' : 'api/events',
  'vendors': 'api/vendors',
  'orders': 'api/orders',
  'historicalOrders': 'api/orders/byUser/'


})
