#Lesson 1 -- Getting Set Up and Experimenting

<h3>Welcome to Beginning Front-End Development</h3>

This course is all designed to help teach skills for Front End web development, or FED. There are more pieces to Web Development then just the front end, but oftentimes in order to have a small personal site, there isn't a large need for the back end parts. 

There are generally two parts to a development stack. The front end, which builds the front-facing markup. This is also referred to as client-side development, or the presentation layer. The back end deals with the server-side elements, for example how a database talks to a web application and or server. 

The key tools we'll be learning to use for Front End Development are HTML, CSS, and Javascript. You don't need to have had any previous programming experience to learn these tools. Lots of what you write on a webpage is simply putting containers around what content you want to share, and then writing rules to control where those containers go and how they look. 

<h3>Foward</h3>

Before we get too far, take a look at the following link:

https://justinjackson.ca/words.html

I like to look at this opinion because I think it's very important. Jackson makes an important distinction on the purpose of Web Content being a service to users. The Content is what the user is there for. If the design and implementation of a website to display that content -- whether it be products or news or music -- hinders the consumer it's not useful. Websites need to be accessible. If they are too cluttered, or complex, or slow, then they're not helping anyone.

In addition to that thinking, it's important to note that sometimes the Web Development on a page is a part of the content. Images, animations, colors, brand logos, and other parts that could be considered markup may be extremely important to the identity of the content. In that case, having a website as bare as Jackson's article could be an inefficient use of the Internet as a media channel.

As we pursue learning about design, it's good to keep dissenting opinions like this in mind. We want our webpages to look good, but they need to be readable and accessible to every user. 

<h3>Needed Downloads</h3>

In order to make the learning process easier, we are going to use a preconfigured framework that will help us experiment with writing basic HTML and CSS, and will then move us towards writing good HTML and CSS.

Github is a great host for versioning, and we'll learn lots more about that later. For now, you are all going to clone into a repository that I have set up on Github and get the stuff you need.

Open up Terminal or Gitbash and type:

<pre>git clone https://github.com/cskingmartin/capstoneFramework</pre>

This will start the download process.

After that type:

<pre>npm install</pre>

This install will take a few minutes, so be patient.

For any code writing you will need a text-editor. Word processors like Microsoft Word aren't useful to us, we need an additional program. I recommend using SublimeText3, it's a popular industry standard editor. Notepad++ is also an option, but I prefer SublimeText because it highlights code for you based on the language you're using making it easy to read, and allows you to add support for more languages to boot.

You can find the download for SublimeText <a href= "https://www.sublimetext.com/3">here</a>.

The download for Notepad++ is <a href="https://notepad-plus-plus.org/download/v7.1.html">here</a>.

<h3>Getting Started</h3>

There are quite a few files you'll see in your directory here. The 'modules' folder contains all of the lesson plans, so if you ever miss a session or want to work ahead you can look there for the course content. The .gitignore and package.json files you probably won't touch, they're configuration files for Github and for the NPM modules. 

The 'src' folder is what we'll primarily be working in. 'src' stands for 'source,' and it's pretty common for most Web Development projects to have one. All of the folders in here contain our organized, original markup. Oftentimes there will be some pre-processing of files that can condense the data, execute some logic, or other things that the browser can't do. All of the final markup that the browser can read will usually be in a 'dist' folder, which stands for distribution. 

As you can see in our 'src' folder, there's already some files in there. Go ahead and open up the 'index.html' file with your browser.

It's nothing special, but all the content of webpages come from '.html' files paired with '.css' and '.js' files to organize content for the viewing pleasure of many.

Like all code, all of the documents come down to beng just text. Thankfully we have better tools than Microsoft Word for writing code. Open up Sublime Text -- then under 'File' select 'Open Folder.' Find in your directory wherever you put the 'sinfulCat' repo and open that folder.

On the left, you can now see all of our files just like we can in Windows Explorer or Finder. 

Go ahead and take a look at the content of the 'index.html' file we just opened.
Let's make a small change to this document; add some text somewhere and then either reopen it or refresh the page on the browser. 

Voila! Easy-peasy. 

Notice that it added the text on the page in a way that corresponds with the rest of the document. If you put it after the "Welcome Student!" text, it shows up after on the page and vice versa. 

If you were to 


<h3>Disclaimer</h3>

tl;dr -- do whatever you want, but try and understand everything FULLY and COMPELTELY

