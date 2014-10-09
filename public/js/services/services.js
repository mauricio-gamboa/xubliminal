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
      }
    };
  }]);
  
})();