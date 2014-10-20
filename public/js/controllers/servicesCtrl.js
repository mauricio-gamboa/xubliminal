(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('ServicesCtrl', ['$log', 'xubServices', function ($log, xubServices) {

    this.servicesData = angular.bind(this, function (services) {
      if (!services.length) return;
      this.services = services;
    });

    this.errorServices = function (error) {
      $log.error('There was an error');
    };
    
    xubServices.getServices(this.servicesData, this.errorServices);
  }]);
}());