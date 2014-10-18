(function () {
  'use strict';

  angular.module('xubliminalApp', ['ngRoute', 'ngAnimate', 'xubliminalApp.controllers', 'xubliminalApp.directives', 'xubliminalApp.services'])

  .config(function ($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'partials/home.html'
    })

    .when('/services', {
      templateUrl: 'partials/services.html'
    })

    .when('/work', {
      templateUrl: 'partials/work.html'
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
  });

  angular.module('xubliminalApp.controllers', []);
  angular.module('xubliminalApp.directives', []);
  angular.module('xubliminalApp.services', []);
}());