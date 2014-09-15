(function () {
  'use strict';

  angular.module('xubliminalApp.directives')

  .directive('bodyClass', [function(){
    return {

      restrict: 'A',

      link: function(scope, element, attrs) {
        scope.$on('$routeChangeSuccess', function (event, current, previous) {
          var route = current.originalPath + '-page';
          var klass = route.replace('/', '');
          element.removeClass().addClass(klass);
        });
      }
    };
  }])

  .directive('activeLink', ['$location', function(location) {
    return {
      restrict: 'A',
      
      link: function(scope, element, attrs, controller) {
        var path = attrs.href;
        path = path.substring(1);
        scope.location = location;
        
        scope.$watch('location.path()', function(newPath) {
          if (path === newPath) element.parent().addClass('active');
          else element.parent().removeClass('active');
        });
      }
    };
  }])

  .directive('mmenu', [function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        element.mmenu({
          onClick: {
            preventDefault: false
          },
          header: {
            add: true,
            content: '<h1 class="logo">Xublime</h1>'
          },
          footer: {
            add: true,
            content: '<img src="public/images/mobile-menu-img.png" alt="Xublime" />'
          }
        });
      }
    };
  }])

  .directive('gmap', [function () {
    return {
      restrict: 'A',

      link: function (scope, element, attrs, controller) {
        var lat = attrs.lat * 1;
        var lng = attrs.lng * 1;
        var map_canvas = element[0];
        
        var latlng = new google.maps.LatLng(lat, lng);

        var map_options = {
          zoom: 15,
          center: latlng,
          scrollwheel: false,
          scaleControl: false,
          streetViewControl: false,
          draggable: true,
          mapTypeControl: false,
          zoomControl: false,
          panControl: false
        };

        var map = new google.maps.Map(map_canvas, map_options);

        var marker = new google.maps.Marker({
          position: latlng,
          map: map,
          icon: 'public/images/marker.png'
        });
      }
    };
  }]);

}());