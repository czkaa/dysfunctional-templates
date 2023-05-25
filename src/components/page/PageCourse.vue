<template>
  <div
    page-course
    class="fixed h-full overflow-hidden bg-white flex text-secondary xs:overflow-y-auto xs:block "
  >
    <div
      class="w-1/2 xs:w-full flex-shrink-0 text-xs text-center overflow-y-scroll border-r border-secondary bg-white p-3 space-y-3 transition-all duration-200 overflow-y-auto"
    >
      <h1 class="filter-outline text-xl mb-16">(Dys)functional Templates</h1>
      <section class="py-3">
        <h2 class="text-lg italic mb-3 filter-outline">Sessions</h2>
        <nav class="space-y-2">
          <a class="block text-xs underline" href="#session-1"
            >Session 1 (14.04.2023)
            <h2
              class="text-sm text-center italic leading-none filter-outline-xs inline-block"
            >
              Introduction
            </h2></a
          >
          <a class="block text-xs underline" href="#session-2"
            >Session 2 (28.04.2023)
            <h2
              class="text-sm text-center italic leading-none filter-outline-xs inline-block"
            >
              Why Do All Websites Look the Same??
            </h2></a
          >
          <a class="block text-xs underline" href="#session-3"
            >Session 3 (05.05.2023)
            <h2
              class="text-sm text-center italic leading-none filter-outline-xs inline-block"
            >
              The Handmade Web
            </h2></a
          >
          <a class="block text-xs underline" href="#session-4"
            >Session 4 (19.05.2023)
            <h2
              class="text-sm text-center italic leading-none filter-outline-xs inline-block"
            >
              Online Session
            </h2></a
          >
          <a class="block text-xs underline" href="#session-5"
            >Session 5 (26.05.2023)
            <h2
              class="text-sm text-center italic leading-none filter-outline-xs inline-block"
            >
              An Idea for A Website
            </h2></a
          >
          <a class="block text-xs underline" href="#session-6"
            >Session 6 (09.06.2023)
            <h2
              class="text-sm text-center italic leading-none filter-outline-xs inline-block"
            >
              Collective Coding
            </h2></a
          >
          <a class="block text-xs underline" href="#session-7"
            >Session 7 (16.06.2023)
            <h2
              class="text-sm text-center italic leading-none filter-outline-xs inline-block"
            >
              Collective Coding
            </h2></a
          >
        </nav>
      </section>

      <section class="py-3">
        <h2 class="text-lg italic mb-1 filter-outline">Infrastructure</h2>
        <div
          class="overflow-hidden rounded-md mt-3 border border-secondary bg-secondary"
          style="height: 376px"
        >
          <iframe
            class="opacity-90"
            style="
              border: none;
              transform: scaleY(0.75) scaleX(0.75) translateY(-16.8%)
                translateX(-16.8%);
            "
            width="134%"
            height="500"
            src="https://www.are.na/karen-czock/dys-functional-templates/embed"
            title="Gemma Copeland’s Are.na channel “Internet Explorers”"
          ></iframe>
        </div>
      </section>

      <section class="py-3">
        <h2 class="text-lg italic mb-1 filter-outline">Contact</h2>
        <p>
          <a href="mailto:karen.czock@posteo.de">email to Karen</a> or
          <a href="mailto:paul.werner@posteo.de">email to Paul</a>
        </p>
      </section>
    </div>

    <div
      style="flex: 1"
      class="w-1/2 xs:w-full flex flex-col text-center text-xs overflow-y-scroll"
    >
      <Sessions1 />
      <Sessions2 />
      <Sessions3 />
      <Sessions4 />
      <Sessions5 />
      <Sessions6 />
      <Sessions7 />
    </div>

    <SnippetCloseButton class="fixed top-3 right-3 z-50" />
  </div>
</template>

<style>
a {
  @apply underline;
}

a:hover {
  text-decoration: none;
}

.list-decimal > li {
  @apply text-left;
}
</style>
