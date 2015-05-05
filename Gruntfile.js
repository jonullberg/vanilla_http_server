'use strict';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.initConfig({
		jshint: {
			gruntfile: {
				src: ['Gruntfile.js']
			},
			all: {
				src: ['Gruntfile.js', 'test/**/*.js', 'server.js']
			},
			options: {
				jshintrc: '.jshintrc'
			}
		},
		mochaTest: {
			options: {
				quite: false
			},
			files: ['test/**/*.js']
		}
	});

	grunt.registerTask('test', ['jshint', 'mochaTest']);
	grunt.registerTask('default', ['test']);

};