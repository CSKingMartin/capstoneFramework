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

As we mentioned earlier, there are other tasks within our gulpfile that we haven't used yet. These have been commented out in order to not mess with the other files. 

Handlebars files are written with an '.hbs' file extension instead of '.html'. We have a task inside of our gulpfile which goes and searches for these files, and grabs all the pieces necessary for them to come together. What it then does is take the transformed '.hbs' files and puts them inside a 'dist' directory as '.html'. 

This type of preprocessing is not uncommon for many different professional level development companies. All of the 'scratch work,' or uncompiled code is written in an 'src' or "source" directory, and it is compiled to the 'dist' or "distribution" directory. 

In order to utilize this preprocessing pattern, I've included another gulpfile which will work out of the box with handlebars. Navigate to the new directory under examples (?).



