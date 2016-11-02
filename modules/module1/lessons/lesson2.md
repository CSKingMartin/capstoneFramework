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


The chevrons or angle brackets help designate a new object on our page. These are called tags. Some of these tags have predefined rules that go along with them. For example, the <pre><!DOCTYPE html></pre> at the very top of the page isn't something that is visible to our users. But it must be the start to your page. This will tell the browser what version of HTML is being used so that it will be decoded and displayed correctly.

The <pre><html></pre> tag after that designates the start of the page that will be displayed. Within this tag, you can see that we specify the language. At the very bottom of the page when we've written everything on the page there will be a closing tag that looks like this: <pre></html></pre>. The '/' included at the front end of the closing tag sets it apart from the beginning. 

Everything between these two tags inherits all of the rules that goes along with <pre><html></pre>. 

Following that is the <pre><html></pre> tag. 

At the very top of an HTML document are. Every webpage for the most part will have a <head> section, because there's more often than not crucial information within. 



