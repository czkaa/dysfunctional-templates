<template>
    <router-link :to="props.path" template-nav-button class="relative group filter-outline"  ref="root">
        <div class="wireframe-text whitespace-nowrap uppercase group-hover:tracking-widest transition-tracking duration-500 filter-blur">{{text}}</div>
        <div class="whitespace-nowrap uppercase w-full z-50 absolute top-0 group-hover:tracking-widest transition-tracking duration-500 text-primary filter-outline">{{props.text}}</div>
    </router-link>
</template>

<script setup>
  import { ref, computed, watch, onMounted } from 'vue'

  const root = ref(null)
  
const props = defineProps({
    text: String,
    path: String
})
</script>