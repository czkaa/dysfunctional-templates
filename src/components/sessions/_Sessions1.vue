<template>
   <section session-1 id="session-1" class="p-3 border-b border-secondary">
    <h2 class="text-lg text-center italic leading-none filter-outline">Introduction</h2>

    <!-- 10:00–10:30 -->
    <h3 class="text-sm filter-outline-xs mt-10 mb-3">1. Introducing Ourselves</h3>
    <p>
    What are your coding skills? Have you ever build or designed a webpage?<br>
    What is your favourite or your least favourite website?
    What do you wish from this course?
    </p>

    <!-- 10:30–11:00 -->
    <h3 class="text-sm filter-outline-xs mt-10 mb-3">2. Introducing the Course</h3>

    <p>This course aims at providing basic understanding of web development. For this purpose, on the technical side, we will start with a very basic introduction to HTML and CSS. We will not have a fully extensive course on everything there is to know. Instead, we want learn together how to extend our knowledge from there and share useful resources.</p>
    <p>Content-wise, we will investigate the current web. More specifically, we will look at how conventions are shaped by template culture and what we might want to do differently. We will approximate this topic in small code experiments, investigating reoccuring website elements. In the end, these small experiments will compile into a collective, alternative website template. Thereby, we want to attain an understanding for contemporary discussion revolving around the web, for different tools and for the context in which websites are published.</p>
    <p>Learning from each other and sharing knowledge is an important part of the course. Every code snippet and observeration is therefore considered open-source and free for everyone else to use. We also try to make everything happen within the predefined course times – no homeworks.</p>
    <!-- Schedule -->
    <!--  -->

    <!-- 11:00–11:30 -->

    <!-- 11:00–11:30 -->
    <h3 class="text-sm filter-outline-xs mt-10 mb-3">3. A Short and Random History of the (Templated) Web</h3>
    
    <!-- 11:30–12:00 -->
    <h3 class="text-sm filter-outline-xs mt-10 mb-3">4. Code Editor Setup </h3>
    <ol class="list-decimal px-10 py-3 border border-secondary rounded-md mx-3">
        <li>Start <a target="_blank" href="https://code.visualstudio.com/">VS Code</a></li>
        <li>Install <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">VS Code Live Server</a></li>
        <li>Download the <a target="_blank" download href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">HTML Boilderplate</a></li>
        <li>Open the boilerplate in VS Code</li>
        <li>Start a live server</li>
    </ol>

    <!-- 13:00–14:30 -->
    <h3 class="text-sm filter-outline-xs mt-10 mb-3">5. A Short Introduction to HTML </h3>

    <p><i>HyperText Markup Language</i>: A computer language that uses tags to define elements within a document. HTML is not a programming or scripting language. </p>
    <p>An HTML document has the file extension <abbr>.html</abbr>. An HTML document can be opened in a simple text editor. It can also be opened in a browser. When opened in a browser, the markup is rendered in a specific, predefined way. This is called <i>default style</i>. The default can be different in different browsers.<p>
        <p>HTML consists of a series of elements, which you use to enclose different parts of the content to make it appear or act a certain way. </p>
    <p>This is an HTML element:</p>
    <code class="block p-3 my-3">
        &lt;p>A paragraph&lt;/p&gt;<br>
    </code>
    There is an opening tag, <code> &lt;p></code>, wrapped in opening and closing angle brackets. This states where the element begins or starts to take effect — in this case where the paragraph begins. There is a closing tag, which is the same as the opening tag, except that it includes a forward slash before the element name. It states where the element ends: <code> &lt;p></code>. The content goes between the opening and closing tags. Other tags, some of which you may have heard, are:
    <code>&lt;h1></code> and <code>&lt;h2></code> for headlines, <code>&lt;i></code> for italic text,  or <code>&lt;a></code> for links. You can find a list of tags <a href="https://htmlreference.io/" target="_blank">here</a>. 
    <p>Not all tags consist of an opening and closing tags. For example, the tag used to show images in a webpage does not require a closing tag: <code >&lt;img><br></code>. That is because they don't have content in the same way the other elements have. They become meaningful by adding attributes such as the <code>src=""</code> attribute, which specifies from where to load the images

</p>
    
    <div class="border border-secondary p-3 my-3 mx-6 rounded-md">
        <ol class="list-decimal px-6">
            <li>Open an empty <a target="_blank" download href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">HTML boilderplate setup</a></li>
            <li>Go to your favourite website</li>
            <li>Open the inspector</li>
            <li>Find 5 different tags on the website and paste them in your own HTML document</li>
            <li>Research what their purpose is</li>
            <li>Check how their default style looks in different browsers</li>
            <li>Explain them to your neighbour</li>
        </ol>
    </div>

    </p>When creating a website an HTML document requires a few additional elements besides tags. A HTML document can look like this:</p>
    <pre class="text-left">
        <code class="block p-3 my-3">
            <!DOCTYPE html>
            <html>
            <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>Page Title</title>
            </head>
            <body>
            <h1>A Heading</h1>
            <p>A paragraph!</p>
            </body>
            </html>
        </code>
    </pre>

    <p>The first tag is a kind of tradition included for the browsers to know what is going to happen. The <code>&lt;html></code> element wraps the content of a website. The <code>&lt;head></code> tag contains meta information invisible to the user of a website.</p>


    <div class="border border-secondary p-3 my-3 mx-6 rounded-md">
        <ol class="list-decimal px-6">
            <li>Go to your favorite website</li>
            <li>Open the inspector</li>
            <li>Change the look of as many elements as possible by changing the <a target="_blank" href="https://cssreference.io/property/background-color/">background color</a>, the <a target="_blank" href="https://cssreference.io/property/border/">border</a>, the <a target="_blank" href="https://cssreference.io/property/border-radius/">border radius</a> and the <a target="_blank" href="https://cssreference.io/property/box-shadow/">box shadow</a>. You can generate cool box shadows with <a target="_blank" href="https://html-css-js.com/css/generator/box-shadow/">this generator</a>. <i>Hint: Don't reload the browser or your changes will get lost.</i></li>
            <li>Document the results with screenshots</li>
            <li>Add the screenshots to our <a href="https://www.are.na/karen-czock/dt-output">are.na channel</a></li>
        </ol>

        <ol class="mt-3">Inspiration:
            <li><a href="http://sebastianlyserena.dk/" target="_blank">http://sebastianlyserena.dk/</a>
            </li>
        </ol>
    </div>


    <!-- 15:00–16:00 -->
    <h3 class="text-sm filter-outline-xs mt-10 mb-3">6. A Short Introduction to CSS </h3>

    <div class="border border-secondary p-3 my-3 mx-6 rounded-md">
        <ol class="list-decimal px-6">
            <li>Go to your favorite website</li>
            <li>Open the inspector</li>
            <li>Change the look of as many elements as possible by changing the <a target="_blank" href="https://cssreference.io/property/background-color/">background color</a>, the <a target="_blank" href="https://cssreference.io/property/border/">border</a>, the <a target="_blank" href="https://cssreference.io/property/border-radius/">border radius</a> and the <a target="_blank" href="https://cssreference.io/property/box-shadow/">box shadow</a>. You can generate cool box shadows with <a target="_blank" href="https://html-css-js.com/css/generator/box-shadow/">this generator</a>. <i>Hint: Don't reload the browser or your changes will get lost.</i></li>
            <li>Document the results with screenshots</li>
            <li>Add the screenshots to our <a href="https://www.are.na/karen-czock/dt-output">are.na channel</a></li>
        </ol>
    </div>

    <div class="border border-secondary p-3 my-3 mx-6 rounded-md">
        <ol class="list-decimal px-6">
            <li>Look around</li>
            <li>Pick a view, an object or an arrangement of objects which you find interesting</li>
            <li>Open an empty <a target="_blank" download href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">HTML boilderplate setup</a></li>
            <li>Try to recreate it using only HTML and CSS</li>
        </ol>

        <ol class="mt-3 text-xs">Inspiration:
            <li><a href="https://www.thisgrey.com/" target="_blank">https://www.thisgrey.com/</a></li>
            <li><a href="https://www.openthiswindow.com/" target="_blank">https://www.openthiswindow.com/</a></li>
            <li><a href="https://www.eggalone.com/" target="_blank">https://www.eggalone.com/</a></li>
            <li><a href="https://root.schloss-post.com/" target="_blank">https://root.schloss-post.com/</a></li>
        </ol>
    </div>

    <h3 class="text-sm filter-outline-xs mt-10 mb-3">Further Reading</h3>

    <a class="block" target="_blank" href="https://html.energy/podcast.html">HTML Enegery Podcast (Laurel Schwulst)</a>
    <a class="block" target="_blank" href="https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/">What is Code (Paul Ford)</a>
    <a class="block" target="_blank" href="https://www.youtube.com/watch?v=aHUtMbJw8iA">Why is CSS so weird? (Miriam Suzanne)</a>
   </section>
</template>

<style>
    code {
        @apply bg-secondary text-white text-xs rounded-md mt-3 px-1;
        font-size: 16px;
    }

    p {
        @apply my-3;
    }

    abbr {
        @apply italic;
    }
</style>