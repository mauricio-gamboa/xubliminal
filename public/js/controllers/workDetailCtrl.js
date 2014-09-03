(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('WorkDetailCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    // Sets the page title
    $rootScope.pageTitle = 'Xublime - Work Detail';
  }]);
}());