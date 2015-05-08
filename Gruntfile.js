module.exports = function(grunt) {

  // CONFIG ===================================/

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: { 
      dev: { 
        options: { 
          style: 'expanded'
        },
        files: {                                  
          'src/css/toolkit.css': 'src/scss/toolkit.scss' 
        }
      },
    },
    // configure file watching --> grunt watch
    watch: {
      css: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      },
    },
    
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'src/css/*.css',
            'src/*.html'
            ]
          },
          options: {
            watchTask: true,
            server: './src'
          }
        }
      },

  });

  // DEPENDENT PLUGINS =========================/

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // TASKS =====================================/

  grunt.registerTask( 'default', ['browserSync', 'watch'] ); // default 'grunt'

};

