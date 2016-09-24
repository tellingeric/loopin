// (function() {
// 	'use strict';

  angular.module('LoopIn.events', [
		'ionic',
    'ngMap',
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
        // cache: false,
        views: {
            'tabs-events-features': {
                templateUrl: 'templates/events/features/features.html',
                controller:'featuresController'
            }
        }
    })

    .state('tabs.events.features-location', {
        url: '/features/location',
        views: {
            'tabs-events-features': {
                templateUrl: 'templates/events/features/location-chooser.html',
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

    .state('tabs.events.vendor-details', {
        url: '/vendors/:vendor_id',
        views: {
            'tabs-events-vendors': {
                templateUrl: 'templates/events/vendors/vendor-details.html',
                controller:'vendorsController'
            }
        }
    })

    .state('tabs.events.map', {
        url: '/map',
        cache: false,
        views: {
            'tabs-events-map': {
                templateUrl: 'templates/events/map/map.html',
                controller:'mapController'
            }
        }
    })



  })

// })();
