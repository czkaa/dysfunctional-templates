<template>
    <nav class="h-full flex flex-col justify-center space-y-10 filter-outline text-md text-white">
        <router-link to="/course" class="flex w-20 h-48 rounded-xl transition-transform duration-500 transform translate-x-10 hover:translate-x-4 cursor-pointer z-50 group">
            <div class="w-0 h-3/4  bg-secondary flex-shrink-0 mt-4 transition-all duration-500"/>
            <div class="w-full h-full bg-secondary rounded-md transition-all duration-500">
                <div class="transform rotate-90 origin-top-left mt-3 ml-5 whitespace-nowrap">Course Info</div>
            </div>
        </router-link>

        <!-- <button @click="setView('Schedule')" class="flex w-20 h-48  sm:h-60 rounded-xl transition-all duration-500 transform translate-x-10 hover:translate-x-4 cursor-pointer z-50 group">
            <div class="w-3 h-2/3  sm:h-3/4 bg-secondary flex-shrink-0 mt-4 transition-all duration-500"/>
            <div class="w-full h-full bg-secondary rounded-md transition-all duration-500">
                <div class="transform rotate-90 origin-top-left mt-12 ml-3">Input</div>
            </div>
        </button> -->
    </nav>
</template>

<script setup>

    import { useStore } from 'vuex';
  
  const store = useStore();

  function setView(string) {
    store.commit('setView', string)
  }

</script>


