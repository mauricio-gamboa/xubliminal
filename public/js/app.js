'use strict';

angular.module('xublime', ['ngRoute']).

config(function ($routeProvider) {
  
  $routeProvider.

  when('/services', {
    templateUrl: 'partials/services.html'
  }).

  otherwise({
    redirectTo: '/services',
  });
});