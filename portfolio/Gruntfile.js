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
          base: '_site',
          hostname: 'localhost',
          port: 8000,
          keepalive: true,
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
    },
    jekyll: {
      options: {
        bundleExec: true,
        src: '<%= app%>'
      },
      dist: {
        options: {
          dest: '<%=dist %>',
          config:'_config.yml,_config.build.yml'
        }
      },
      serve: {
        options: {
          dest: '.jekyll',
          drafts: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-svgstore');

  // Default task(s).
  grunt.registerTask('default', ['uglify','sass']);
  grunt.registerTask('serve', ['connect','watch']);
  grunt.registerTask('jekyll', ['jekyll']);

};
