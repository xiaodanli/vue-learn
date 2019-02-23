let gulp = require('gulp');
let server = require('gulp-webserver');
let url = require('url');
let fs = require('fs');
let path = require('path');

gulp.task('server',() => {
    return gulp.src('src')
    .pipe(server({
        port:9090,
        middleware:(req,res,next) => {
            let pathname = url.parse(req.url).pathname;

            if(pathname === '/api/list'){
                setTimeout(() => {
                    res.end(JSON.stringify({title:'新闻标题'}))
                },2000)
            }else{
                pathname = pathname === '/' ? 'index.html':pathname;
                res.end(fs.readFileSync(path.join(__dirname,'src',pathname)));
            }
        }
    }))
})