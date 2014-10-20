(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('GalleryCtrl', ['$log', 'xubServices', function ($log, xubServices) {

    this.galleryItems = angular.bind(this, function (items) {
      if (!items.length) return;
      this.items = items;
    });

    this.errorGallery = function (error) {
      $log.error('There was an error');
    };
    
    xubServices.getGallery(this.galleryItems, this.errorGallery);
  }]);
}());