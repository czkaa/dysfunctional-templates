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
        <li>Create a folder on your computer</li>
        <li>Open the folder in VS code</li>
        <li>Create an empty <i>index.html</i> file</li>
        <li>Start a live server</li>
    </ol>

    <!-- 13:00–14:30 -->
    <h3 class="text-sm filter-outline-xs mt-10 mb-3">5. A Short Introduction to HTML </h3>

    <ol class="mt-3 text-xs">
        <h4 class="text-sm filter-outline-xs">Tutorials</h4>
        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" target="_blank">HTML Basics</a></li>
        <li><a href="https://htmlreference.io/" target="_blank">A List of HTML Tags</a></li>
    </ol>
    
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

    <div class="border border-secondary p-3 my-3 mx-6 rounded-md">
        <ol class="list-decimal px-6">
            <li>Open an empty <a target="_blank" download href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">HTML boilderplate setup</a></li>
            <li>Chose a song, a short text or a poem which you like</li>
            <li>Find the text snippet and paste it into the index file</li>
            <li>Illustrate the text using only HTML elements. For example, use <a target="_blank" href="https://htmlreference.io/element/table/">tables</a>, <a target="_blank" href="https://htmlreference.io/element/h1/">headlines</a>, <a target="_blank" href="https://htmlreference.io/element/input/">input fields</a>, <a target="_blank" href="https://htmlreference.io/element/li/">lists</a>, <a target="_blank" href="https://htmlreference.io/element/summary/">summarys</a>.</li>
            <li>Open your website in different browsers and check if it looks differently</li>
            <li>Present your website to the group</li>
        </ol>
    </div>

    <ol class="mt-3">
        <h4 class="text-sm filter-outline-xs">Collection</h4>
        <li><a href="http://sebastianlyserena.dk/" target="_blank">http://sebastianlyserena.dk/</a></li>
        <li><a href="https://pitscher.net/index_v1.7.txt" target="_blank">https://pitscher.net/index_v1.7.txt</a></li>
    </ol>
    
    <!-- 15:00–16:00 -->
    <h3 class="text-sm filter-outline-xs mt-10 mb-3">6. A Short Introduction to CSS </h3>

    <ol class="mt-3 text-xs">
        <h4 class="text-sm filter-outline-xs">Tutorials</h4>
        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics" target="_blank">CSS Basics</a></li>
        <li><a href="https://learnlayout.com/" target="_blank">CSS Layout</a></li>
        <li><a href="https://cssreference.io/" target="_blank">A List of CSS Attributes</a></li>
    </ol>

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
            <li>Try to recreate it using only HTML and CSS. Check out different ways to position your elements <a target="_blanl" href="https://www.are.na/block/21328405">here</a></li>
            <li>Advanced: Make your website interactive using <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/:hover?retiredLocale=de">hover</a></li>
            <li>Present your website to the group</li>
        </ol>   
    </div>

    <ol class="mt-3 text-xs">
        <h4 class="text-sm filter-outline-xs">Collection</h4>
        <li><a href="https://www.thisgrey.com/" target="_blank">https://www.thisgrey.com/</a></li>
        <li><a href="https://www.openthiswindow.com/" target="_blank">https://www.openthiswindow.com/</a></li>
        <li><a href="https://www.eggalone.com/" target="_blank">https://www.eggalone.com/</a></li>
        <li><a href="https://root.schloss-post.com/" target="_blank">https://root.schloss-post.com/</a></li>
    </ol>

    <h3 class="text-sm filter-outline-xs mt-10 mb-3">7. Further Reading</h3>

    <a class="block" target="_blank" href="https://html.energy/podcast.html">HTML Enegery Podcast (Laurel Schwulst)</a>
    <a class="block" target="_blank" href="https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/">What is Code (Paul Ford)</a>
    <a class="block" target="_blank" href="https://www.youtube.com/watch?v=aHUtMbJw8iA">Why is CSS so weird? (Miriam Suzanne)</a>
    <a class="block" target="_blank" href="https://brutalistwebsites.com/">Brutalist Websites</a>
   </section>
</template>

<style scoped>
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

    h3 {
        @apply mb-5 mt-10;
    }
</style>