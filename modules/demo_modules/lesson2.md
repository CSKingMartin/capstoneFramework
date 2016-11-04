#Lesson Two; Gulp and Browsersync

Let's start where we just left off. 

<h3>Gulp</h3>

This engine runs on Gulp, which is a streaming-style build system. This means that it uses plugins and other small bits of software to run series of tasks. For example, if you wrote code in many separate files to keep them organized, you could run a task called 'build,' that would compile them all together in a single file and place it in the 'dist' folder. Make sense?

The high level concept of how Gulp works isn't necessary to use it. If you want to learn more, feel free to visit <a href="https://github.com/gulpjs/gulp">Gulp's Github page</a> to learn more.

In your directory, you should see a file called 'gulpfile.js' in the root. Whenever you run commands through gulp, it takes all of it's instructions through this gulpfile. The instructions that are included are one's that I've written myself for you. They should all be able to work out of the box if your file structure is similar to mine. 

Each lesson will introduce a new tool to use, and I've included several examples to make them easier to understand. Hopefully from that point you can tailor parts of your own gulpfiles to match whatever organizational structure that makes sense to you.

In our gulpfile right now, you should see only two tasks that aren't commented out. The first one at the top called 'default' is what we ran at the end of the last lesson. I used it in this instance to test, but essentially the task that is titled 'default' in your gulpfile will be ran if you simply type 'gulp' in your CLI. 

<h3>BrowserSync</h3>

If there's a tool in this framework that's the most useful it'll probably be BrowserSync. Thankfully this tool is also extremely easy to undrstand and use. So let's get to it.

The second two tasks in the gulpfile is called 'watch' and 'bs'. 
The 'watch' task that monitors all of your files. If you save any changes to the files, it will proc whatever tasks it was designed to run after. In this case it will refresh the browser with BrowserSync to show the changes you make in realtime. 

```
gulp.task('watch', function() {
	gulp.watch('src/**/*.*', function(){

		browserSync.reload();
//		gulp.run('build');
	})
});	
```
As seen here, you can see the directory that it watches. 'src/**/*.*' refers to all files in all folders from the 'src' root. This is called 'globbing.'

![alt text](https://camo.githubusercontent.com/d0cccd8d3b074fd523d8de7d126994b6f87b718a/687474703a2f2f692e696d6775722e636f6d2f37766a4f326d462e676966 "Globby Glob")

```
gulp.task('bs',['watch'], function(){
	browserSync({
		server: {
			baseDir: 'src'
		}
	})
});

```

The 'bs' task is shorthand for BrowserSync. What this plugin task does is host the contents of your 'src' file on your browser to view. This means instead of opening them over and over again my hand, this will automate that process.
You can see in the code under the 'bs' task most of the pieces I'm describing. 

The 'baseDir' points to the directory that it will launch files from. It will look for an 'index.html' file and that will be the homepage that will be launched. If there isn't any file there, it'll throw an error so naming is important here.

It also has instructions to run 'watch' before it runs the tasks inside. This means all we have to do is run this single task, and it will not only monitor our files but launch our site as well! Let's try it with what's already included in our src file.

Type the following into your CLI: 

<pre>gulp bs</pre>

You should see movement on your screen, as the current index.html file is hosted.

