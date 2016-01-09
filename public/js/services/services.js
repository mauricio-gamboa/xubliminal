(function() {
  'use strict';

  angular.module('xubliminalApp.services')

  .factory('xubServices', ['$http', function($http) {
    return {
      getServices: function(successCallback, errorCallback) {
        $http({
          method: 'GET',
          url: 'public/data/services.json'
        }).
        success(function(data, status, headers, config) {
          successCallback(data);
        }).
        error(function(data, status, headers, config) {
          errorCallback(data);
        });
      },

      getGallery: function(successCallback, errorCallback) {
        $http({
          method: 'GET',
          url: 'public/data/gallery.json'
        }).
        success(function(data, status, headers, config) {
          successCallback(data);
        }).
        error(function(data, status, headers, config) {
          errorCallback(data);
        });
      },

      getGalleryNew: function(successCallback, errorCallback) {
        $http({
          method: 'GET',
          url: 'public/data/gallery-new.json'
        }).
        success(function(data, status, headers, config) {
          successCallback(data);
        }).
        error(function(data, status, headers, config) {
          errorCallback(data);
        });
      },

      getTestimonials: function(successCallback, errorCallback) {
        $http({
          method: 'GET',
          url: 'public/data/testimonials.json'
        }).
        success(function(data, status, headers, config) {
          successCallback(data);
        }).
        error(function(data, status, headers, config) {
          errorCallback(data);
        });
      },

      getRecentWork: function(successCallback, errorCallback) {
        $http({
          method: 'GET',
          url: 'public/data/recentWork.json'
        }).
        success(function(data, status, headers, config) {
          successCallback(data);
        }).
        error(function(data, status, headers, config) {
          errorCallback(data);
        });
      },

      submitGetQuote: function(data, successCallback, errorCallback) {
        $http({
          method  : 'POST',
          url     : 'process.php',
          data    : $.param(data),
          headers : { 
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).
        success(function(data, status, headers, config) {
          successCallback(data);
        }).
        error(function(data, status, headers, config) {
          errorCallback(data);
        });
      }
    };
  }]);
  
})();