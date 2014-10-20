(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('GetQuoteCtrl', ['xubServices', function (xubServices) {

    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    };

    this.budgetText = 'Select your budget';
    this.servicesText = 'Choose a service';

    this.submitGetQuote = angular.bind(this, function (isValid) {
      this.submitted = true;
      
      if (isValid) {
        console.log(this.formData);
      }
    });

    this.setService = angular.bind(this, function (service) {
      this.formData.service = service;
      this.servicesText = service;
    });

    this.setBudget = angular.bind(this, function (budget) {
      this.formData.budget = budget;
      this.budgetText = budget;
    });

  }]);
}());