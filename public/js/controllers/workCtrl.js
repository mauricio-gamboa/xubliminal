(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('WorkCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    // Sets the page title
    $rootScope.pageTitle = 'Xublime - Work';
  }]);
}());