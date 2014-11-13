module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'main.js',
        dest: 'build/main.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed' /*expanded*/
        },
        files: {
          'main.css': 'main.scss'
        }
      }
    },
    connect: {
      task: {
        options: {
          port: 8000,
          hostname: '*'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['css/*.css'],
        tasks: ['autoprefixer']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify','sass']);
  grunt.registerTask('serve', ['connect']);
  grunt.registerTask('watch', ['watch']);

};
