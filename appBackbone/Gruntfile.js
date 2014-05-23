module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
 
        pkg: grunt.file.readJSON('package.json'),
 
        
		connect: {
			keepalive:{
				options:{
					keepalive:true,
					port: 9001,
					base: '.'
				}
		  }
		}
    });
 
   
	grunt.loadNpmTasks('grunt-contrib-connect');
 
    // Default task(s).
    grunt.registerTask('default', [ 'connect']);
		
	grunt.registerTask('server', ['connect']);
 
};