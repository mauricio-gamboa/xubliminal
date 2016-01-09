(function () {
	'use strict';

	angular.module('xubliminalApp', ['ngRoute', 'ngAnimate', 'duScroll', 'angular-google-analytics', 'xubliminalApp.controllers', 'xubliminalApp.directives', 'xubliminalApp.services'])

		.config(function ($routeProvider, AnalyticsProvider) {

			$routeProvider

				.when('/', {
					templateUrl: 'partials/home.html'
				})

				.when('/services', {
					templateUrl: 'partials/services.html'
				})

				.when('/services/:service', {
					templateUrl: 'partials/services.html'
				})

				.when('/work', {
					templateUrl: 'partials/work.html'
				})

				.when('/work-new', {
					templateUrl: 'partials/work-new.html'
				})

				.when('/work-detail', {
					templateUrl: 'partials/work-detail.html'
				})

				.when('/freebies', {
					templateUrl: 'partials/freebies.html'
				})

				.when('/get-quote', {
					templateUrl: 'partials/get-quote.html'
				})

				.otherwise({
					redirectTo: '/',
				});

			AnalyticsProvider.setAccount('UA-41378737-1');
			AnalyticsProvider.setDomainName('xubliminal.com');
			AnalyticsProvider.ignoreFirstPageLoad(true);
			AnalyticsProvider.setPageEvent('$routeChangeSuccess');
		});

	angular.module('xubliminalApp.controllers', []);
	angular.module('xubliminalApp.directives', []);
	angular.module('xubliminalApp.services', []);
}());