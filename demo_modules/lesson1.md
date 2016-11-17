#Lesson One; Setup

<h3>Welcome to sinfulCat</h3>

This framework is all designed to help teach skills for Front End web development, or FED. There are more pieces to Web Development then just the front end, but oftentimes in order to have a small personal site, there isn't a large need for the back end parts. 

There are generally two parts to a development stack. The front end, which builds the front-facing markup. This is also referred to as client-side development, or the presentation layer. The back end deals with the server-side elements, for example how a database talks to a web application and or server. 

<h3>Foward</h3>

Before we get too far, take a look at the following link:

https://justinjackson.ca/words.html

I like to look at this opinion because I think it's very important. Jackson makes an important distinction on the purpose of Web Content being a service to users. The Content is what the user is there for. If the design and implementation of a website to display that content -- whether it be products or news or music -- hinders the consumer it's not useful. Websites need to be accessible. If they are too cluttered, or complex, or slow, then they're not helping anyone.

In addition to that thinking, it's important to note that sometimes the Web Development on a page is a part of the content. Images, animations, colors, brand logos, and other parts that could be considered markup may be extremely important to the identity of the content. In that case, having a website as bare as Jackson's article could be an inefficient use of the Internet as a media channel.

As we pursue learning about design, it's good to keep dissenting opinions like this in mind. We want our webpages to look good, but they need to be readable and accessible to every user. 

<h3>Needed Downloads</h3>

In order to make the learning process easier, we are going to use a preconfigured framework that will help us experiment with writing basic HTML and CSS, and will then move us towards writing good HTML and CSS.

Github is a great host for versioning, and we'll learn lots more about that later. For now, you are all going to clone into a repository that I have set up on Github and get the stuff you need.

Travel to the location that you want your workplace to sit. I recommend that you don't put it on your network drive (:Z) because the framework will run slower. This is now your workspace to use! Whenever you want to use this framework you will need to operate it through gitbash or some other CLI. I am less familiar with useing Command Line so that's why I specifiy using Gitbash. The operations are the same for the most part, but Gitbash reads Linux-style commands and has Git capabilites already installed.

To get the repository type:

<pre>git clone -b demo https://github.com/cskingmartin/sinfulCat</pre>

This will start the download process.

After that type:

<pre>npm install</pre>

This install will take a few minutes, so be patient.

For any code writing you will need a text-editor. Word processors like Microsoft Word aren't useful to us, we need an additional program. I recommend using SublimeText3, it's a popular industry standard editor. Notepad++ is also an option, but I prefer SublimeText because it highlights code for you based on the language you're using making it easy to read, and allows you to add support for more languages to boot.

<h3>Getting Started</h3>

There are quite a few files you'll see in your directory here. The 'demo_modules' folder contains all of the lesson plans. The .gitignore and package.json files you probably won't touch, they're configuration files for Github and for the NPM modules. 

The 'src' folder is what we'll primarily be working in. 'src' stands for 'source,' and it's pretty common for most Web Development projects to have one. All of the folders in here contain our organized, original markup. Oftentimes there will be some pre-processing of files that can condense the data, execute some logic, or other things that the browser can't do. All of the final markup that the browser can read will usually be in a 'dist' folder, which stands for distribution. 

This framework is tuned and specialized to streamline your workflow. Workflow isn't neccessarily an HTML or CSS concept, but an overhead concept that most developers are concerned with. In the world of deadlines and huge websites, being able to trim the fat from some of the more tedious and heady parts of writing for Webpages is a huge plus.

Your installs and downloads should be close to finishing. Type 'gulp' into your CLI. You should see no error messages! If you do, check to see what the message is and see if you can solve it. Google is your best friend.

Each lesson from here on out will include some lecture and examples. I will include a copy of my working examples in the 'examples' folder which you can use to try and get your ownp pieces working. If you have any questions or issues, please email me at cwells@linfield.edu.