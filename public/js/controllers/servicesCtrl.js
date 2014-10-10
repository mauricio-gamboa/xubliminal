(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('ServicesCtrl', ['xubServices', function (xubServices) {

    this.servicesData = angular.bind(this, function (services) {
      if (!services.length) return;
      this.services = services;
    });

    this.errorServices = function (error) {
      console.log(error);
    };
    
    xubServices.getServices(this.servicesData, this.errorServices);
  }]);
}());