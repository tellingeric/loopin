// (function() {
// 	'use strict';

  angular.module('LoopIn.events', [
		'ionic',
    'LoopIn.constant',
    'ngStorage'
    ])

  .config(function($stateProvider) {
		$stateProvider
    .state('tabs.events', {
        url: '/events',
        views: {
            'tab-events': {
                templateUrl: 'templates/events/tab-events.html',
                abstract: true
            }
        }
    })

    .state('tabs.events.features', {
        url: '/features',
        cache: false,
        views: {
            'tabs-events-features': {
                templateUrl: 'templates/events/features/features.html',
                controller:'featuresController'
            }
        }
    })

    .state('tabs.events.features-details', {
        url: '/details/:event_id',
        views: {
            'tabs-events-features': {
                templateUrl: 'templates/events/features/features-details.html',
                controller:'featuresController'
            }
        }
    })

    .state('tabs.events.vendors', {
        url: '/vendors',
        views: {
            'tabs-events-vendors': {
                templateUrl: 'templates/events/vendors/vendors.html',
                controller:'vendorsController'
            }
        }
    })

    .state('tabs.events.vendors-menu', {
        url: '/vendors/:vendor_id',
        views: {
            'tabs-events-vendors': {
                templateUrl: 'templates/events/vendors/vendors-menu.html',
                controller:'menuController'
            }
        }
    })
  })

// })();
