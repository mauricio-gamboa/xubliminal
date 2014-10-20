(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('RecentWorkCtrl', ['$log', 'xubServices', function ($log, xubServices) {

    this.recentWorkItems = angular.bind(this, function (items) {
      if (!items.length) return;
      this.items = items;
    });

    this.errorRecentWork = function (error) {
      $log.error('There was an error');
    };
    
    xubServices.getRecentWork(this.recentWorkItems, this.errorRecentWork);
  }]);
}());