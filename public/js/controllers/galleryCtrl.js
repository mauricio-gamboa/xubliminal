(function () {
  'use strict';

  angular.module('xubliminalApp.controllers')

  .controller('GalleryCtrl', ['xubServices', function (xubServices) {

    this.galleryItems = angular.bind(this, function (items) {
      if (!items.length) return;
      this.items = items;
    });

    this.errorGallery = function (error) {
      console.log(error);
    };
    
    xubServices.getGallery(this.galleryItems, this.errorGallery);
  }]);
}());