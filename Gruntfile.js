module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
      scripts: {
        files: ['**/*.scss'],
        tasks: ['sass', 'cssmin', 'concat', 'uglify'],
        options: {
          spawn: false,
        },
      },
    },
		sass: {
			dist: {
				options: {
					style: 'compact'
				},
				files: {
					'build/main.css': 'scss/main.scss',
				},
			},
		},
		concat: {
		    options: {
		      separator: grunt.util.linefeed,
		    },
		    dist: {
		      src: ['js/*.js'],
		      dest: 'build/main.js',
		    },
		},
		uglify: {
		    options: {
		    	mangle: false
		    },
		    my_target: {
		    	files: {
		    	'build/min/main.min.js': ['build/main.js']
		    	},
		    },
		},
		cssmin: {
			target: {
			    files: [{
			      	expand: true,
			      	cwd: 'build/',
			      	src: ['main.css'],
			      	dest: 'build/min',
			      	ext: '.min.css'
			    }]
		  	},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('minify', ['uglify', 'cssmin']);
  grunt.registerTask('build', ['sass', 'concat']);
	grunt.registerTask('dev', ['build', 'minify', 'watch']);
}