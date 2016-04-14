module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['assets/js/dev/*.js'],
        dest: 'assetsjs/script.js'
      },
      distscss: {
        src: ['assets/scss/*.scss'],
        dest: 'assets/scss/main.scss'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/main.css': 'assets/scss/main.scss'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'js/<%= pkg.name %>.js' : '<%= concat.dist.dest %>'
        }
      }
    },
    watch: {
      sass: {
        files: ['assets/scss/**/*.scss', 'assets/scss/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: 'js/dev/main.js'
      },
      files: '<%= concat.dist.src %>',
      tasks: ['concat', 'uglify', 'sass']
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      prefixed_main: {
        src: 'assets/css/dev/main.css',
        dest: 'assets/css/main.css'
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};