<template>
  <div home class="w-full h-full">
    <PageHome :content="content"/>
  </div>
</template>

<script setup>
const props = defineProps({
    content: Object
  })
</script>
