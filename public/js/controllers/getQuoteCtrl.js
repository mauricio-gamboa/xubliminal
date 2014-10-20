(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('GetQuoteCtrl', ['$log', 'xubServices', function ($log, xubServices) {

    this.formData = {};

    this.budgetText = 'Select your budget';
    this.servicesText = 'Choose a service';

    this.submitGetQuote = angular.bind(this, function (isValid) {
      this.submitted = true;
      if (isValid) xubServices.submitGetQuote(this.formData, this.formSubmitted, this.formSubmittedError);
    });

    this.setService = angular.bind(this, function (service) {
      this.formData.service = service;
      this.servicesText = service;
    });

    this.setBudget = angular.bind(this, function (budget) {
      this.formData.budget = budget;
      this.budgetText = budget;
    });

    this.formSubmitted = angular.bind(this, function (data) {
      if (data.success) this.showSuccess = true;
    });

    this.formSubmittedError = function (data) {
      $log.error('There was an error');
    };

  }]);
}());