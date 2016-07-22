# module 1

The first module needs to address the beginning setup for the Semester course, as well as begin teaching basic HTML/CSS. The great thing about using Gulp and BrowserSync when just starting to learn HTML and CSS is that it gives you instant feedback. No only is this helpful for the student, but the Professor is also able to get examples on screen and in front of the class quickly. 

# tutorials/new things

<h3>Github</h3>
Github has a great tutorial, referencing that would be good (no need to reinvent the wheel). Have students create a repo two ways -- do it from the browser and 
```
git init
git remote add origin https://<your_github_address_here>
git pull origin master
```
Be sure to explain branches ASAP. Teach good protocol by enforcing a 'dev' branch as well as the 'master' branch.

<h3>Gulp</h3>
Gulp should be explained more and more throughout the semester, but students should know off the bat what it does. Play with a few simple plugins, maybe? Show them the logic behind piping/streams, AS WELL AS <strong>why</strong> we would ever need this amazing tool. BrowserSync should be in the default setup. gulp-rename, gulp-concat are good test plugins. (Or gulp-jimp-resize ;) ). The idea is not to overwhelm them. 

# assignments/lessons
layout stuff -- ACTUAL SEMANITC CONTROLLED LAYOUT DESIGN. NO CUTTING CORNERS -- SO FRIGGIN IMPORTANT WHY WHY WHY
--This will take a LOT to structure. I need to learn a lot more about this myself before I become anywhere near able to talk and teach about this. Having a good foundation is nice, but remember that they aren't going to be able to have near teh amound of depth that someone who has been doing this for a long time could have had. BUT if we provide a lesson, and a good example for layout then many problems down the line could be solved.

homepage -- let's have gulp rename and pipe shit to a dist file and have them host from github_pages right away. That way we help them create a hub that they can use for side projects, but they also have a place where things can be graded. BUT... they also can host to Asteroid... hosting to either or seems like a good option. Allows students to have different experiences, and start making informed choices about both. This could be an easy first assignment, but they have little stuff they can research about Asteroid. I'll have to mess with this a lot -- github pages is fairly stable and contained but for me I also had a weird workflow involving a separate git repo in my 'dist' folder that I would want them to emulate. But then again, that makes total sense.

navbar -- adds onto the homepage, stretches into subsequent projects. They could also just have navigation with buttons too but the navbar is applicable and nice. Let's try and have them build one on their own, and not rely on Bootstrap for the "magic" yet. The navigation links shouldn't lead anywhere YET. Thought -- what about mobile????

images/image carousel -- good javascript bit here; not sure if this is the right module for it. Javascript is a bit beyond HTML and CSS. I feel like I would want to introduce this later... ugh. Think about it. 

afterthoughts -- how is lecture going to work? there should be some lecture, but maybe not as high a volume as was in COMP405. Think about topics TO lecture on (streams, piping, layout, css/html history, future of web).
