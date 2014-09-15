(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.pageTitle = 'Xublime - Home';
  }]);
}());