<template>
    <router-link to="/" snippet-close-button class="w-12 h-12 filter-outline">
        <div class="w-full top-1/2 absolute h-1 -mt-0.5 rounded-sm bg-tertiary  transform rotate-45"></div>
        <div class="w-1 h-full -ml-0.5 top-0 left-1/2 absolute rounded-sm bg-tertiary  transform rotate-45"></div>
    </router-link>
</template>

<script setup>

  import { useStore } from 'vuex';
  
  const store = useStore();

  function setView(string) {
    store.commit('setView', string)
  }

</script>