(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('ServicesCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    // Sets the page title
    $rootScope.pageTitle = 'Xublime - Services';
  }]);
}());