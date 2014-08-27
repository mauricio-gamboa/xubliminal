'use strict';

angular.module('xublime', ['ngRoute']).

config(function ($routeProvider) {
  
  $routeProvider.

  when('/services', {
    templateUrl: 'partials/services.html'
  }).

  when('/work', {
    templateUrl: 'partials/work.html'
  }).

  otherwise({
    redirectTo: '/services',
  });
});