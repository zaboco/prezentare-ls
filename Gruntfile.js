module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.initConfig({
    watch: {
      html: {
        files: ["lsc.html", "**/*.css"],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.task.registerTask('default', ['watch']);
}
