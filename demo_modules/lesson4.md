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

<h3>Enter Handlebars</h3>

