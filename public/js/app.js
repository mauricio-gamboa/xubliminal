'use strict';

angular.module('xublime', ['xublime.services', 'ngRoute']).

config(function ($routeProvider) {
  
  $routeProvider.

  when('/', {
    templateUrl: 'partials/services.html'
  }).

  otherwise({
    redirectTo: '/',
  });
});