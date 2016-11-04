#Lesson Two; Gulp and Browsersync

Let's start where we just left off. 

If there's a tool in this framework that's the most useful it'll probably be BrowserSync. Thankfully this tool is also extremely easy to undrstand and use. So let's get to it.

This engine runs on Gulp, which is a streaming-style build system. This means that it uses plugins and other small bits of software to run series of tasks. For example, if you wrote code in many separate files to keep them organized, you could run a task called 'build,' that would compile them all together in a single file and place it in the 'dist' folder. Make sense?

The high level concept of how Gulp works isn't necessary to use it. If you want to learn more, feel free to visit <a href="https://github.com/gulpjs/gulp">Gulp's Github page</a> to learn more.

In your directory, you should see a file called 'gulpfile.js' in the root. Whenever you run commands through gulp, it takes all of it's instructions through this gulpfile. The instructions that are included are one's that I've written myself for you. They should all be able to work out of the box if your file structure is similar to mine. 

Each lesson will introduce a new tool to use, and I've included several examples to make them easier to understand. Hopefully from that point you can tailor parts of your own gulpfiles to match whatever organizational structure that makes sense to you.

In our gulpfile right now, you should see only two tasks that aren't commented out. The first one at the top called 'default' is what we ran at the end of the last lesson. I used it in this instance to test, but essentially the task that is titled 'default' in your gulpfile will be ran if you simply type 'gulp' in your CLI. 

