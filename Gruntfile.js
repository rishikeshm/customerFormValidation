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

		bowerBundle: {
		  target: {
		  
		    // Point to the files that should be updated when
		    // you run `grunt bowerBundle`
		    src: [
		      '<%= config.app %>/index.html',   // .html support...
		    ]
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
        tasks: ['bowerBundle']
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
					open: {
						target: 'http://localhost:<%= connect.options.port %>',
						appName: 'chrome'
					}
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-bundle');

	grunt.registerTask('serve', 'Compile then start a server', function(target){
		grunt.task.run([
						'bowerBundle',
            'connect:server',
            'watch'
        ]);

	});


};