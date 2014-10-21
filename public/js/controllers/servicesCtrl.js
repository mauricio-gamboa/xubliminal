(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('ServicesCtrl', ['$log', '$routeParams', 'xubServices', function ($log, $routeParams, xubServices) {

    this.servicesData = angular.bind(this, function (services) {
      if (!services.length) return;
      this.services = services;
      this.tab = $routeParams.tab ? $routeParams.tab : 0;
      this.service = this.services[this.tab];
    });

    this.errorServices = function (error) {
      $log.error('There was an error');
    };
    
    xubServices.getServices(this.servicesData, this.errorServices);
  }]);
}());