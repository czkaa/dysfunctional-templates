<template>
     <div class="w-10/12 sm:w-full p-4 bg-primary shadow-xs" :style="{maskImage: `url('/dysfunctional-templates/background.svg')`, maskSize: 'cover'}">
        
        <SnippetResizable class="w-9/12 hover:bg-primary transition-all duration-500 mx-auto">
            <BasicInput 
            :resize="true" 
            class="filter-outline-xs"
            classNames="w-full text-md text-secondary leading-1 outline-none bg-transparent bg-opacity-20 placeholder-secondary sm:filter-none"
            placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            text="Countless platforms offer ready-made templates for a wide range of applications. Website builders facilitate drag-and-drop customization. Trained AI-algorithms generate interfaces on demand with only a few keywords as input. 
In this course, we will explore the consequences of the increasingly easy ways to create websites without programming knowledge. How are conventions created and manifested when templates with the highest possible generalizability are used? What understanding of efficiency and usability is behind this? How is content shaped when placeholder texts specify hierarchies? And why is the menu almost always at the top left side? On the other hand, what do templates and website builders mean for accessibility? Does all code really have to be written by yourself? What does it actually mean to program something 'yourself'? When is it not only fast, but also useful or even necessary to follow established design patterns?  We will approach these questions in small web experiments. In doing so, we will construct our own antagonistic counterpart: the dysfunctional template. A dysfunctional template reverses mechanisms of efficiency and functionality. Hierarchies are turned upside down, legibility and unambiguity are answered with confusion and inconsistency.  Decisions are not taken away, but questioned." />
        </SnippetResizable>

    </div>
</template>