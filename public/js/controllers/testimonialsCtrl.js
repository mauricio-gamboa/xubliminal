(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('TestimonialsCtrl', ['xubServices', function (xubServices) {

    this.testimonialsData = angular.bind(this, function (testimonials) {
      if (!testimonials.length) return;
      this.testimonials = testimonials;
    });

    this.errorTestimonials = function (error) {
      console.log(error);
    };
    
    xubServices.getTestimonials(this.testimonialsData, this.errorTestimonials);
  }]);
}());