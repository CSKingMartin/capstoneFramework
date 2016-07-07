# frameworkProject (codename: sinfulCat)
This project serves as the hub for my Senior Capstone project. As a part of earning my degree in Computer Science at Linfield College, I'm required to submit a final project (this). 

<strong>tl;dr:</strong> This project contains (or will contain) all the documentation and framework to support a new strain of curriculum for Linfield's Computer Science Department. 

After having taken a class at Linfield the Spring of 2016 on Web Development and participating in a Front End Development internship shortly afterwards, the technology and practices taught were noticably lacking. The goals of this project are to help not only teach foundational skills in HTML, CSS, and Javascript (a Holy Trinity of Sorts), but to also develop skills at: 
<ul>
<li>researching, choosing, and implementing new technologies for personal and large projects;</li>
<li>standard FED practices such as SMACSS, Object Oriented CSS, and modularization;</li>
<li>high-level Javascript proficiency and familiarity with modern development tools such as Node.js, Gulp, and templating languages.</li>
</ul>

#Origin:
Over the Summer of 2016, I've participated in an internship at Connective DX in Portland, OR (for more information about Connective, see https://www.connectivedx.com/). Their first task for me has been to create a Web Framework for myself, and build a website from said framework so that I would become familiar with common tools at they (and the industry as a whole) use. 

That jumpstarted a great journey of new technologies for me, and I found myself wishing that more students at Linfield would be able to harness this kind of educational experience. Thus spawned this idea, that my Capstone would be just that. Design a Framework and corresponding Curriculum to be able to bring most of what I learn here at Connective 'home.'


#What I'm using:
I was pretty much given an open sandbox to create whatever I wanted, proviced that it was working towards building a web development
framework that would come close to emulating some of the functions of ConnectiveDX's existing Phoenix framework:
<br>
https://github.com/connectivedx/Phoenix
<br>
As of right now, this project includes and implements:
  <ul>
    <li><strong>Gulp</strong> -- a build system used to compile the different tools and resources involved in my framework. In particular I use a lot of the piping/streaming capabilities to run tasks compiling SASS, and minifying code. I also use the Watch feature of Gulp in tandem with browserSync to see changes I make to my webiste in real time.</li>
    <li>browserSync -- a Gulp module that hosts your html on localhost:3000 for you to view as you're working. When used with the Watch feature of Gulp, it will refresh every time a change is made, showing you the effects of your most recent save in realtime.</li>
    <li><strong>Nunjucks</strong> -- This is the templating language I chose in order to do things like partition my HTML into partials and layouts. This is the backbone behind achieving a framework that supports a modular framework. When writing a site, instead of copy/pasting common code for each HTML page, they can be written once, referenced and included in initial Nunjucks HTML code, and then compiled into a master HTML document via Gulp.</li>
    <li><strong>SASS</strong> -- very commonly used/known. SASS is a CSS extension language designed to ease the amount of time developers spend on writing raw code.</li>
    <li><strong>gulp-cssmin</strong> -- I happened across a few different modules for minifying css, and this is the one I chose. Simply put, it removes any excess returns, spaces, and tabs from your css and compiles it into a *.min.css file.</li>
    <li><strong>run-Sequence</strong> -- a module that allows for single task in Gulp to run other multiple Gulp tasks in sequence. Without this, it's still possible to write a hierarchy, where before a task is run, several others need to be run, but it can get clunky and the order sometimes isn't enforced. Implemented to define running tasks in sequence or in parallel.</li>
    <li><strong>FlexBox Grid</strong> -- some 3rd party CSS that allows for formatting the pages of my site through a grid system (similar to the Bootstrap grid system). I downloaded it as an NPM module, but it can be downloaded as the raw files and referenced/imported in your .css or .scss files.</li>
  </ul>
  <br>
Future goals include understanding the pieces that I've already decided to implement further, and adding a few more as I see fit. The scale of my test site is extremely small (and is also included here), and it's hard to test things that would potentially have a larger scope and cause problems down the road.
<br>
If you would like to keep track of my thought process as well as progress, please visit https://cscwells.wordpress.com/ for more information.

