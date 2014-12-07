(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('ServicesCtrl', ['$log', '$routeParams', 'xubServices', function ($log, $routeParams, xubServices) {

    this.servicesData = angular.bind(this, function (services) {
      if (!services.length) return;
      
      this.serviceIndex = 0;
      
      if ($routeParams.service == 'web-design')
        this.serviceIndex = 0;
      else if ($routeParams.service == 'mobile-app-design')
        this.serviceIndex = 1;
      else if ($routeParams.service == 'creative-designs')
        this.serviceIndex = 2;
      
      this.services = services;
      this.service = this.services[this.serviceIndex];
    });

    this.errorServices = function (error) {
      $log.error('There was an error');
    };
    
    xubServices.getServices(this.servicesData, this.errorServices);
  }]);
}());