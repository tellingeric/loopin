// (function() {
// 	'use strict';

  angular.module('LoopIn.settings', [
		'ionic'
  ])
  .config(function($stateProvider) {
		$stateProvider
    .state('tabs.settings', {
      url:'/settings',
      views:{
        'tab-settings':{
          templateUrl:'templates/settings/tab-settings.html',
          controller:'settingsController'
        }
      }})

    })

// })();
