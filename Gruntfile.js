"use strict";

module.exports = function(grunt) {
  var bannerText = '/*\n' + 
    ' * <%= pkg.name %>.js - v<%= pkg.version %> - <%= pkg.description %>\n' + 
    ' * Author: <%= pkg.author %>\n' + 
    ' * License: <%= pkg.license.type %>\n' +
    ' * Repository: <%= pkg.repository.url %>\n' +
    ' * Last Build: <%= grunt.template.today("yyyy-mm-dd HH:mm") %>\n' +
    ' *\n' +
    ' */\n\n';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        banner: bannerText,
        separator: '\n',
        footer: '\n'
      },
      build: {
        files: {
          'my-utils.js': ['src/*.js']
        }
      }
    },
    uglify: {
      options: {
        mangle: false,
        compress: true,
        //preserveComments: 'all',
        banner: bannerText,
        footer: '\n'
      },
      build: {
        files: {
          'my-utils.min.js': ['src/*.js']
        }
      }
    }
  });

  // Load the plugin that provides the "concat" and "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);
};
