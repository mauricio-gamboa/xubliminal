module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/OwlCarousel/owl-carousel/owl.carousel.js',
        'bower_components/bowser/src/bowser.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/jQuery.mmenu/src/js/jquery.mmenu.min.all.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-animate/angular-animate.js'
        ],
        dest: 'public/js/libs.js'
      }
    },

    uglify: {
      js: {
        files: {
          'public/js/libs.js': 'public/js/libs.js'
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'public/styles/libs.css': [
          'bower_components/bootstrap/dist/css/bootstrap.css', 
          'bower_components/jQuery.mmenu/src/css/jquery.mmenu.all.css',
          'bower_components/OwlCarousel/owl-carousel/owl.carousel.css',
          'bower_components/OwlCarousel/owl-carousel/owl.theme.css',
          'bower_components/font-awesome/css/font-awesome.min.css'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};