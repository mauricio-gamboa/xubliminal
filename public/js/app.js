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

  when('/work-detail', {
    templateUrl: 'partials/work-detail.html'
  }).

  when('/freebies', {
    templateUrl: 'partials/freebies.html'
  }).

  otherwise({
    redirectTo: '/services',
  });
});