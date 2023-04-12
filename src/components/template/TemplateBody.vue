<template>
     <div class="w-10/12 sm:w-full p-4 bg-primary shadow-xs" :style="{maskImage: `url('/background.svg')`, maskSize: 'cover'}">
     <!-- <div class="w-10/12 sm:w-full p-4 bg-primary shadow-xs" :style="{maskImage: `url('/dysfunctional-templates/background.svg')`, maskSize: 'cover'}"> -->
        <SnippetResizable class="w-9/12 hover:bg-primary transition-all duration-500 mx-auto">
            <BasicInput 
            :resize="true" 
            class="filter-outline-xs"
            classNames="w-full text-md text-secondary leading-1 outline-none bg-transparent bg-opacity-20 placeholder-secondary sm:filter-none"
            text="The current web is shaped by the increasingly simplified means of creating websites without writing a line of code. In this course, we will investigate the relationship between placeholder texts and content, between conventions and generalizability, and usability. We will discuss different viewpoints, visit existing websites, and inspect tools from AI-powered template builders to simple text editors. In conducting small code and thought experiments, we will collectively approximate our own, antagonistic version of the functional template: The dysfunctional template may respond to readability with confusion or turn hierarchies upside down. It can be slow, inefficient, and dilletantish. It may question decisions instead of taking them away. The course will start off with a basic introduction to HTML and CSS. No prior coding experience is needed and students with no coding experience are especially encouraged to participate."
            placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            />
        </SnippetResizable>

    </div>
</template>