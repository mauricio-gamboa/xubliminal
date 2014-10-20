(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('TestimonialsCtrl', ['$log', 'xubServices', function ($log, xubServices) {

    this.testimonialsData = angular.bind(this, function (testimonials) {
      if (!testimonials.length) return;
      this.testimonials = testimonials;
    });

    this.errorTestimonials = function (error) {
      $log.error('There was an error');
    };
    
    xubServices.getTestimonials(this.testimonialsData, this.errorTestimonials);
  }]);
}());