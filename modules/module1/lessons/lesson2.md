#Lesson 2 -- Basic HTML

<h3>Organization of HTML</h3>

HTML stands for Hyper-Text-Markup-Language, and it's the first building block to websites that we'll use. HTML can be thought of as holding the actual <em>content</em> of the webpage. This is the document that will have all of the text, all of the structures and pieces that are laid out from top to bottom online. 

HTML is organized into sections which have predefined rules to go along with them. I've provided an example to help illustrate this. 

Here's an example of a generic webpage:

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset = "utf-8">
		<title>My Test Website</title>
		<link rel="stylesheet" href="main.css"/>
	</head>
	...


The chevrons or angle brackets help designate a new object on our page. These are called tags. Some of these tags have predefined rules that go along with them. For example, the ```<!DOCTYPE html>``` at the very top of the page isn't something that is visible to our users. But it must be the start to your page. This will tell the browser what version of HTML is being used so that it will be decoded and displayed correctly.

The ```<html>``` tag after that designates the start of the page that will be displayed. Within this tag, you can see that we specify the language. At the very bottom of the page when we've written everything on the page there will be a closing tag that looks like this: ```</html>```. The '/' included at the front end of the closing tag sets it apart from the beginning. 

Everything between these two tags inherits all of the rules that goes along with ```<html>```. This is important because we want the browser to know how to interpret all of the content that we create.


Next is the ```<head>``` section. Every webpage for the most part will have a ```<head>``` because there's useful pieces to this. Here we define the charset, which is the encoding for Unicode, the title which is what will show either at teh top of our browser window or on teh tab when the page is open, as well as links to any external documents that we are also using. Here, you can see that we are referencing a CSS stylesheet.

The important thing to keep in mind about the organization of webpages is that operate on a hierarchy. All information within to tags play by certain rules, but there can be also tags within tags which make things more complicated. Take a look at the following snippet:

	<button class="button-lg">
		<div class="button__title">Button</div>
		<div class="button__subtitle">For Pushing</div>
	</button>

Here we have a section for a button, that plays by some specific rules. These rules probably look like the size of the button, what color it is, and how big the text inside is. But, you can see that there are other ```<div>``` tags inside as well that have other rules. Unless these rules contradict each other, the pieces of content ("Button" and "For Pushing") inherit all of the rules for both of these classes of tags. If they do clash, then it will always inherit the rules of the closest class (in this case, the classes "button__title" and "button_subtitle"). 

<h3>Time to Practice!</h3>


Now it's time to get some experience! The best way to really understand how this stuff works is to see for yourself. The link <a href="http://www.w3schools.com/tags/">here</a> is a list of all the built in HTML tags to start with. We'll be designing our own classes later, but these should help. 



