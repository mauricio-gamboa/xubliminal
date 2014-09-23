(function () {
  'use strict';

  angular.module('xubliminalApp.directives')

  .directive('bodyClass', [function(){
    return {

      restrict: 'A',

      link: function(scope, element, attrs) {
        scope.$on('$routeChangeSuccess', function (event, current, previous) {
          var path = current.originalPath,
          klass = path + '-page',
          cleanedClass = '';

          if (path == '/')
            cleanedClass = 'home-page transparent';
          else
            cleanedClass = klass.replace('/', '');
          
          element.removeClass().addClass(cleanedClass);
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

  .directive('fullHeight', ['$window', function($window) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        var height = $window.innerHeight;
        element.css({
          'height': height
        });
        
        $(window).resize(function() {
          var newHeight = $window.innerHeight;
          element.css({
            'height': newHeight
          });
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
  }])

  .directive('goto', [function () {
    return {
      restrict: 'A',

      link: function (scope, element, attrs, controller) {
        element.on('click', function() {
          if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname) {
            var target=$(this.hash);
            target=target.length?target:$('[name='+ this.hash.slice(1)+']');
            var headerHeight = $('header').css('height').replace('px', '') * 1;

            if (isNaN(headerHeight)) headerHeight = 0;

            if(target.length) {
              $('html,body').animate({scrollTop:target.offset().top - headerHeight},1000);
              return false;
            }
          }
        });
      }
    };
  }])

  .directive('homeCarousel', [function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var current = 1;
        var footerBgContainer = $('.bgs');
        
        element.on('slide.bs.carousel', function (e) {
          setFooterBackground((current % 5) + 1);
          current++;
        });

        function setFooterBackground(bgNumber) {
          var prev = footerBgContainer.find('.bg');

          setTimeout(function () {
            prev.remove();
          }, 4100);

          var el = document.createElement('div');
          el.className += 'bg bg' + bgNumber;

          footerBgContainer.append(el);

          setTimeout(function () {
            el.className += ' show';
          }, 20);
        }
      }
    };
  }])

  // @TODO: make this directive angular friendly
  .directive('scroll', [function () {
    return {
      restrict: 'A',
      scope : false,

      link: function (scope, element, attrs, controller) {
        var $window = $(window);
        var $body = $(document.body);
        var $html = $('html');
        var $both = $html.add($body);
        var $use = ((bowser.firefox || bowser.msie) ? $html : $body);
        var $header = $('header');
        var $toggle = element.find('.scroll-down');
        var $content = element.next();
        var previousScrollPosition = 0;

        try {
          $window.scroll(function() {
            if ($use) {
              if ($use.scrollTop() > 0) {
                $toggle.fadeOut();
              } else {
                $toggle.fadeIn();
              }

              var height = element.height() - 64;

              if ($use.scrollTop() > height) {
                $body.removeClass('transparent');
              } else {
                $body.addClass('transparent');
              }
            }
          });
        } catch (e) {
          console.log(e);
        }
        
        var toggleActive = false;

        $toggle.click(function() {

          toggleActive = true;

          $both.animate({
            scrollTop: $content.offset().top - 64
          }, {
            duration: 800,
            easing: 'linear',
            complete: function() {
              toggleActive = false;
            }
          });
        });

        if (! ('ontouchstart' in window) && ! ('onmsgesturechange' in window)) {
          var animating = false;

          $window.scroll(function (e) {

            if ($use) {
              var currentScrollPosition = $use.scrollTop();

              if (animating) {
                e.preventDefault();
                return;
              }

              if (! toggleActive && previousScrollPosition === 0 && currentScrollPosition >= 0) {
                $both.animate({
                  scrollTop: $content.offset().top - 64
                }, {
                  duration: 800,
                  easing: 'linear',
                  complete: function() {
                    animating = false;
                  }
                });
              }

              previousScrollPosition = currentScrollPosition;
            }
          });
        }

        scope.$on('$destroy', function() {
          $window = null;
          $body = null;
          $html = null;
          $both = null;
          $use = null;
          $toggle = null;
          $content = null;
          previousScrollPosition = null;
          toggleActive = null;
        });
      }
    };
  }]);

}());