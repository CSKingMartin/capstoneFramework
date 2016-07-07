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

#Goals:
There are a few key pieces to the Curriculum that I want included. The learning process should be modular -- that is tha tyou add one piece at a time to a current project. Tasks (projects?) could be given that are more complex in sequence. This gives the understanding from the students of <strong>why</strong> not using the next learned tool would have significant drawbacks or shortcomings. One of the key things I didn't care for about COMP405 was the fact that we as inexperienced students did not have a single clue as to <strong>why</strong> we were being told to use these new tools. It was fast, indeed, but too much of it was just "follow me and let magic happen." At our pacing we didn't have a need for the tools we were given. This curriculum should create a need for each tool, so that the student appreciates and values what they are learning.

If our curriculum is modular, that means that our Framework also needs to be designed modular. The barebones start should be static pure HTML and CSS (similar to the current start to COMP405). You should then be able to add more Node Packages, use SCSS, add Templating Languages in pieces, and have them all work together. Implementing this could be a bitch and a half. 
<ul>
<li>Idea -- sequential repositories that could be cloned? Could be a version control system -- cloning specific versions. Versions would have corresponding modules.</li>
<li>Master directory could include folders of EVERY module, the src folder could be transferrable between each 'framework.'</li>
<li>Use NPM for different pieces -- just download and go?</li>
<li>Automated update of Gulp tasks?</li>
</ul>
   
#Pieces/Tools to Include:
Tools that are included in <strong>sinfulCat</strong> should be chosen carefully and only if they serve as the vehicle for the curriculum. These tools need to inform and build good basic skills in HTML, CSS, and Javascript, as well as encourage modularization. 

*<strong>Gulp</strong> -- a build system used to compile the different tools and resources. Extremely valuable for workflow -- good for and end-project module or teachings in a subsequent class in Advanced Javascript maybe? Gulp needs to be used at the start, if not solely for the 'Watch' functionality. Also can be used as a vehicle to encourage moving folders to a 'dist' folder. Easy setup for deploy to Github Pages?</li>
*<strong>browserSync</strong> -- a Gulp module that hosts your html on localhost:3000 for you to view as you're working. When used with the Watch feature of Gulp, it will refresh every time a change is made, showing you the effects of your most recent save in realtime. Paired with Gulp's watch as stated above.</li>
*<strong>Templating Languages (?)</strong> -- Templating Languages would be included at a later time. They do help encourage the 'modularization' idea, but they also can cause serious problems with over-extension. My experiences had me using a templating language pretty frivilously to the point where it became pretty useless/irrelevant. It just made things hard to find.
*<strong>SASS</strong> -- very commonly used/known. SASS is a CSS extension language designed to ease the amount of time developers spend on writing raw code. I think this is a good include. It definitely works towards the goal of modularization and is very widely used. Brings in a lot of the 'object oriented' thinking that carries over from Programming courses.
*<strong>run-Sequence</strong> -- Could have a place, not necessary at current time.
*<strong>Third Party Packages</strong> -- some 3rd party CSS allows for quick templating and experiements on websites. Admittely, this might be a huge resource for students to be able to really dig into what's important in this class. It doesn't have to be just flat build everything.
