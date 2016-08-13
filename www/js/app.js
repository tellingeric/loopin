// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('LoopIn', [
  'ionic','ionic.service.core',

  'ngStorage',
  'ngMap',

  'jett.ionic.filter.bar',

  'LoopIn.constant',
  'LoopIn.user',
  'LoopIn.cart',
  'LoopIn.settings',
  'LoopIn.events'


])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    var push = new Ionic.Push({
      "debug" : true
    });
    push.register(function(token){
      console.log("My Device token:", token.token);
      push.saveToken(token);
    });
  });
})


.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider, $httpProvider) {

  $ionicConfigProvider.platform.android.tabs.position('bottom');

  $stateProvider
    .state('tabs', {
      url:'/tab',
      abstract:true,
      templateUrl:'templates/tabs.html'
    })


  $urlRouterProvider.otherwise('/tab/events/features');
  // $urlRouterProvider.otherwise('/login');

})

// commented for heroku reason

.config(function ($httpProvider){


  $httpProvider.interceptors.push(['$q', '$location', '$localStorage', '$injector', function($q, $location, $localStorage, $injector) {

    console.log('interceptor');

      return {
        'request': function (config) {
            config.headers = config.headers || {};
            if ($localStorage.user.token) {
                config.headers['x-access-token'] = $localStorage.user.token;
            }
            return config;
        },
        'responseError': function(response) {
            if(response.status === 401 || response.status === 403) {
              console.log('redirect to login');
              // $location.path('/login');
              $injector.get('$state').transitionTo('login');

            }
            return $q.reject(response);
        }
      };
    }]);

  })
