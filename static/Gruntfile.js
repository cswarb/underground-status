module.exports = function(grunt) {

  grunt.initConfig({
  	watch: {
	  styles: {
	    files: 'css/*.scss',
	    tasks: ['sass', 'postcss']
	  },
	},
    php: {
        dist: {
            options: {
                port: 1234,
                keepalive: true,
                open: true
            }
        }
    },
    sass: {
	    dist: {
	      files: {
	        'css/main.css': 'css/main.scss'
	      }
	    }
	  },
    postcss: {
          options: {
              map: false,
              processors: [
                  require('autoprefixer')({
                      browsers: ['last 4 versions', 'ie 8-11']
                  })
              ]
          },
          dist: {
              src: 'css/*.css'
          }
      }
  });

  grunt.loadNpmTasks('grunt-php');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['php', 'watch']);

};