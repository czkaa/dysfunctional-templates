<template>
    <header layout-header class="border border-secondary rounded-full hover:bg-primary w-10/12 hover:w-11/12 cursor-pointer transition-all duration-1000 flex flex-col justify-center items-center overflow-hidden flex-shrink-0">
      <h1 class="text-xl font-sans p-2 ">
        <div>
          <BasicInput
            placeholder="Insert Title Here" 
            text="Dysfunctional Templates" 
            class="filter-outline"
            classNames="h-28 sm:h-20 -mt-1 whitespace-nowrap text-primary tracking-tight w-full overflow-hidden leading-none outline-none bg-transparent text-center placeholder-primary" />
        </div>
      </h1>
    </header>

    
</template>

<script setup>

  import { ref } from 'vue'

  const inputText = ref('Insert Title Here')

</script>