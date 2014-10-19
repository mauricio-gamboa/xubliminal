(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('RecentWorkCtrl', ['xubServices', function (xubServices) {

    this.recentWorkItems = angular.bind(this, function (items) {
      if (!items.length) return;
      this.items = items;
    });

    this.errorRecentWork = function (error) {
      console.log(error);
    };
    
    xubServices.getRecentWork(this.recentWorkItems, this.errorRecentWork);
  }]);
}());