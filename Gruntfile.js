module.exports = function(grunt){

	grunt.initConfig({
		config: {
      // Configurable paths
      app: 'app'
    },

		wiredep: {
			bower: {
				src: ['<%= config.app %>/index.html']
				//ignorePath: /\.\.\//
			}
		},

    watch: {
			xyz: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: ['<%= config.app %>/{,*/}*.html','Gruntfile.js']
			},
			bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= config.app %>/**/*.js'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      css: {
      	files: ['<%= config.app %>/**/*.css'],
      	options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
		},

		connect: {
			options: {
				hostname: '*',
				port: 9999,
				livereload: 35217,
			},
			server: {
				options: {					
					base: ['<%= config.app %>', '.'],			
					open: '<%= config.app %>/index.html'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('serve', 'Compile then start a server', function(target){
		grunt.task.run([
			      'wiredep',
            'connect:server',
            'watch'
        ]);

	});


};