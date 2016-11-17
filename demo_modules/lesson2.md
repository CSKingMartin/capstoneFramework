#Lesson Two; Gulp and Browsersync

Let's start where we just left off. 

<h3>Gulp</h3>

This engine runs on Gulp, which is a streaming-style build system. This means that it uses plugins and other small bits of software to run series of tasks. For example, if you wrote code in many separate files to keep them organized, you could run a task called 'build,' that would compile them all together in a single file and place it in the 'dist' folder. Make sense?

The high level concept of how Gulp works isn't necessary to use it. If you want to learn more, feel free to visit <a href="https://github.com/gulpjs/gulp">Gulp's Github page</a> to learn more.

In your directory, you should see a file called 'gulpfile.js' in the root. Whenever you run commands through gulp, it takes all of it's instructions through this gulpfile. The instructions that are included are one's that I've written myself for you. They should all be able to work out of the box if your file structure is similar to mine. 

Each lesson will introduce a new tool to use, and I've included several examples to make them easier to understand. Hopefully from that point you can tailor parts of your own gulpfiles to match whatever organizational structure that makes sense to you.

In our gulpfile right now, you should see only two tasks that aren't commented out. The first one at the top called 'default' is what we ran at the end of the last lesson. I used it in this instance to test, but essentially the task that is titled 'default' in your gulpfile will be ran if you simply type 'gulp' in your CLI. 

<h3>Gulp Tasks</h3>

If there's a tool in this framework that's the most useful it'll probably be BrowserSync. Thankfully this tool is also extremely easy to undrstand and use. So let's get to it.

The second two tasks in the gulpfile is called 'watch' and 'bs'. 
The 'watch' task that monitors all of your files. If you save any changes to the files, it will proc whatever tasks it was designed to run after. In this case it will refresh the browser with BrowserSync to show the changes you make in realtime. 

<h3>Watch</h3>

```
gulp.task('watch', function() {
	gulp.watch('src/**/*.*', function(){

		browserSync.reload();
		...

	})
});	
```
As seen here, you can see the directory that it watches. 'src/**/*.*' refers to all files in all folders from the 'src' root. This is called 'globbing.' The double asterisk (**) is shorthand for every folder, the (*.*) is shorthand for every file with every extension. 

![alt text](https://camo.githubusercontent.com/d0cccd8d3b074fd523d8de7d126994b6f87b718a/687474703a2f2f692e696d6775722e636f6d2f37766a4f326d462e676966 "Globby Glob")

When any of these files are modified, it runs the code inside of the ```gulp.watch()``` function. The function inside is a BrowserSync method (which is explained next).

<h3>BrowserSync</h3>

The other task we are going to talk about is BrowserSync. This is a module that will host your site on your web browser, just as if you had opened a '.html' file and looked at it on Chrome or Firefox. 


```
gulp.task('bs',['watch'], function(){
	browserSync({
		server: {
			baseDir: 'src'
		}
	})
});

```

What this plugin task does is host the contents of a directory on your browser to view. This means instead of opening them over and over again my hand, this will automate that process. You can see in the code under the 'bs' task most of the pieces I'm describing. 

The 'baseDir' points to the directory that it will launch files from. It will look for an 'index.html' file and that will be the homepage that will be launched. If there isn't any file there, it'll throw an error so naming is important here. It's important that the home page for your website be named 'index.html'. The formatting is crucial to this task to work, and it's common convention for web development.

It also has instructions to run 'watch' before it runs the tasks inside. This means all we have to do is run this single task, and it will not only monitor our files but launch our site as well! Let's try it with what's already included in our src file.

Type the following into your CLI: 

<pre>gulp bs</pre>

You should see movement on your screen, as the current index.html file is hosted. If we save any changes now to our .html files, while the 'gulp bs' task is running it should update and show us our changes. If you make changes while it's not running, restarting the task will still show the changes made. Let's make a few adjustments to make sure that this is working.

Add the following to your 'index.html' file:

<pre>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</pre>

Save the file and watch your browser. You should see it refresh and display the changes that you've made. Sometimes, depending on the speed of the process, it may take a second save to refresh the page. You can either save the document again, which will run the 'watch' function, or you can refresh the page manually on the browser if this happens.

Remember that if you aren't seeing changes after multiple refreshes, and you see that the process is still running, make sure you double check where BrowserSync is launching from, and that the changes are shown in your 'src' directory!

BrowserSync also shows changes we make in .css files as well. We already have a css file in our directory, let's make a change there.

Change the value of the color property to a different color. There are multiple colors that are already known to the language, so pick a simple one like red, green, or blue. Save the document, and you should see the change when you look back at your browser!

This tool is excessively helpful in writing the basic elements of your site. My process, when I'm starting a fresh website, is to develop parts at a time and test them in isolation with BrowserSync. 

If you have a basic layout stylesheet complete, you can have a basic playground which makes it extremely easy to test and see. 

Later in this guide, we will use different processes which will transform shorthand code into raw html and css for us. During that time, we will learn how to alter the two methods above to launch from a different directory, and still show the result that we are looking for.

