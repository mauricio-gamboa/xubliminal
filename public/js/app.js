(function () {
  'use strict';

  angular.module('xubliminalApp', ['xubliminalApp.controllers', 'xubliminalApp.directives', 'ngRoute'])

  .config(function ($routeProvider) {
    $routeProvider

    .when('/services', {
      templateUrl: 'partials/services.html',
      controller: 'ServicesCtrl'
    })

    .when('/work', {
      templateUrl: 'partials/work.html',
      controller: 'WorkCtrl'
    })

    .when('/work-detail', {
      templateUrl: 'partials/work-detail.html',
      controller: 'WorkDetailCtrl'
    })

    .when('/freebies', {
      templateUrl: 'partials/freebies.html',
      controller: 'FreebiesCtrl'
    })

    .when('/get-quote', {
      templateUrl: 'partials/get-quote.html',
      controller: 'GetQuoteCtrl'
    })

    .otherwise({
      redirectTo: '/work',
    });
  });

  angular.module('xubliminalApp.controllers', []);
  angular.module('xubliminalApp.directives', []);
}());