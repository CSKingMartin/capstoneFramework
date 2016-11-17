#Lesson Four; Templating Languages

<h3>Functional Programming</h3>

Before we try and understand templating languages, it's good to try and understand functional programming as beforehand. For most of you this is your first class, or one of the first classes you've had do do with the Computer Science field, so I won't go overboard on detail. But here is the essense of the concept:

```
function MyFunction(variable) {
	//do stuff with variable
}
```
Above is some pseudo-code of a hypothetical function. The way that functions work in programming, is that they have a set of instructions that it uses every time the function is called. In the above instance, it takes some piece of data that it uses in the instructions. Here's an example that adds 2 to any number passed to it:
```
function add2(number) {
	var answer = number + 2;

	return answer;
}
```

Hopefully this is fairly easy to understand. Let's try and make the jump to using this type of functionality with HTML and CSS. If we can utilize tools that work within our framework to utilize functional programming, we can have set blocks of HTML that can be populated with variables. In short: instead of writing this block of code over and over again...

```
<div class="productCard">
	<p>Shoes</p>

</div>

<div class="productCard">
	<p>Hats</p>

</div>

<div class="productCard">
	<p>Shirts</p>

</div>
...

```
We could have a structure that helps us save time that performs something like this for every product card:
```
function writeProductCard(productName){
	//write this out in HTML:
	<div class="productCard">
		<p>'productName'</p>
	</div>

}

```

<h3>Enter Templating Languages</h3>

What are Templating Langauges? They are exactly what you would expect them to be. Instead of writing code over multiple times, or copy-pasting endlessly, we write templates which are filled in. The pieces that are filled in are the equivalent to variables in the above discussion. Once we have the basic blocks of HTML written, then we can call it into our file (like a function), and provide the data that goes into each empty spot. 

There are several languages that you can use for templating, each that have evolved from simpler ones. The one that I use most often is Handlebars, because it's relatively simple to understand and implement. 

The time consumption that comes along with templating languages, is that they cannot be read by the browser. Browsers are built to recognize HTML and CSS, that's it. So you can't jus write out webpages in a different languages and expect a browser to be able to pick it up and spit it out on the view just like you want it. 

Therefore we have a step that needs to be completed before we pass the code that we right along to the browser. We need to preprocess it, and transform it from the templating language into raw HTML. This is where our framework comes in. 

<h3>Back to the Gulpfile</h3>

Handlebars files are written with an '.hbs' file extension instead of '.html'. We have a task inside of our gulpfile which goes and searches for these files, and grabs all the pieces necessary for them to come together. What it then does is take the transformed '.hbs' files and puts them inside a 'dist' directory as '.html'. 

This type of preprocessing is not uncommon for many different professional level development companies. All of the 'scratch work,' or uncompiled code is written in an 'src' or "source" directory, and it is compiled to the 'dist' or "distribution" directory. 

In order to utilize this preprocessing pattern, I've included another gulpfile which will work out of the box with handlebars. Navigate to the new directory under examples labeled lesson 4, which has a new gulpfile and src directory.

Here we have two new tasks -- one title 'css' and one titled 'hb'. 

The 'css' task is extremely simple. All it does is copy our 'main.css' file from our 'src' directory into the new 'dist' directory. This will be the new directory that BrowserSync will launch from -- and you can see that change made in the 'bs' task as well.

The other task is the Handlebars task:

```
//gulpfile.js
...
var handlebars = require('gulp-static-handlebars');
...

gulp.task('hb', function(){
	return gulp.src('./src/index.hbs')
	    .pipe(handlebars({contents:""}, {
	        partials: gulp.src('./src/**/*.hbs')
	    }))
	    .pipe(rename('index.html'))
	    .pipe(gulp.dest('./dist'));
});
```
Notice that we have a few new variables that we 'require' to run this task. These variables search for the javascript files included in the NPM modules that we installed at the very start of the installation process. To use the functionality of Handlebars, we needed another module to help us transform it into '.html'. 

The first part focuses on our 'index.hbs' file inside of our main directory, and looks at all of the 'Handlebars' pieces of the file. We may have some standard HTML code written in there as well, and it knows that it doesn't have to change any of the other parts.

The Handlebars portions of the file will be referencing 'partials,' which are simply put small sections of HTML that we wrote elsewhere in order to have a standard copy. Then with Handlebars, we can tell our task to simply place in those portions of HTML into our 'index.html' file. 

```
{{!-- index.hbs --}}
...

<body>

<div class="layout">

		<h1>Hello World! Welcome to Sinful Cat!</h1>

		{{> _button }} {{!-- this is Handlebars! --}}
	
</div>


</body>
...
```

You can see in our 'index.hbs' file has a small section of Handlebars code included in it. ```{{> _button }}``` refers to a partial that we have somewhere in our 'src' directory, and will search for it by the name that we place inside the double curly brackets. 
```
{{!-- src/partials/_button.hbs --}}
<div class="button">
	<p>Click Me!</p>
</div>

```
This is simply some HTML written with a '.hbs' extension. Partials are written with an underscore before the name in order to identify that they are indeed pieces of HTML, not whole pages. When we run our ```gulp hb``` task, it will take our 'indes.hbs' file and compile it to a '.html' file and place it in the 'dist' directory and will look like this:

```
// dist/index.html
...
<body>

<div class="layout">

		<h1>Hello World! Welcome to Sinful Cat!</h1>

		<div class="button">
			<p>Click Me!</p>
		</div> 

</div>

</body>
...

```

Earlier I had said that with templating languages, you can pass variables into the templates (which we are calling partials). We can do just that with a little bit more complexity in our partial file:

```
{{!-- _button2.hbs --}}
<div class="button">
	<div class="button__title">{{title}}</div>  {{!-- the {{title}} allows us to place a variable here --}}
</div>
```

If we use this partial in our 'index.hbs' file instead of the other button like so: ```{{> _button2 }}```, the piece with ```{{title}}``` will be left blank by the Handlebars process because we didn't specify inserting a variable there. In order to pass variables, we call our partial in the 'index.hbs' with the following:

```
{{!--  our new 'index.hbs' --}}

<body>
	<div class="layout">

		<h1>Hello World! Welcome to Sinful Cat!</h1>

		{{> _button }} {{!-- this is Handlebars! --}}

		{{> _button2 title="A Variable!" }} {{!-- this calling our new partial, with the {{title}} variable being passed --}}

</div>

</body>

```
This now allows us to pass information into the preproccess through partial variables. This is what our new 'index.html' will look like:
```
// dist/index.html
...
<body>

<div class="layout">

		<h1>Hello World! Welcome to Sinful Cat!</h1>

		<div class="button">
			<p>Click Me!</p>
		</div> 

		<div class="button">
			<p>A Variable!</p>
		</div>

</div>

</body>
...
```

This ties back to our concept of modularization. We are able to dictate what our custom buttons look like, and we can write that code in a separate space where it won't be changed. When we implement buttons into our webpage, we have consistency in their structure without adding too much time to our process of writing them.

With more complicated structures, which require layers of ```<div>``` tags, this becomes especially important. 

We also know exactly where to fix or add pieces to our buttons -- our directory is easily structured where we can navigate to our button and mess with the '_button.hbs' file. Also -- any changes we make to our '.hbs' partials will be illustrated EVERYWHERE within the project when 'gulp hb' is run. 

There are a few more examples within the example directory for Lesson 4 that are worth looking at as well, including a header and a footer, as well as a small 'navbar' example. 

Templating languages can be used much more complexly with different logic, but I want to limit the course for now to exclusively using partials. 

