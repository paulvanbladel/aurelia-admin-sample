var gulp = require('gulp');
var paths = require('../paths');
var nodemon = require('gulp-nodemon');
var plugin = require('gulp-load-plugins')({lazy: true});
var browserSync = require('browser-sync');
var path = require('path');
gulp.task('node', function (cb) {
    
    gulp.watch(path.join(paths.serverBaseDir,'**/*.js'), nodemon.restart);
    var nodeOptions = {
        script: paths.nodeStartUpScriptPath,
        delayTime: 1
        //watch: ['q:']
        //watch: [path.normalize(path.join( paths.serverBaseDir,'app.js'))]
        //watch: ['D:/github/aurelia-admin-sample/server/app.js']
    };
    var called = false;
    return nodemon(nodeOptions)
        .on('change', function () {
            log('nodemon detected change...!')
        })
        .on('start', function () {
          if (!called) {
            cb();
          };
          called = true;
            log('node application is started!')
        })
        .on('crash', function(){
            log('app crashed')
        })
        .on('restart', function(ev) {
            log('*** nodemon restarted');
            log('files changed on restart:\n' + ev);
            /*setTimeout(function() {
                browserSync.notify('reloading now ...');
                browserSync.reload({stream: false});
            }, 1000);*/
        })
});
function log(msg) {
    plugin.util.log(plugin.util.colors.green(msg));

}
