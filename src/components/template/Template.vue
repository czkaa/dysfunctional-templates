<template>
    <div class="fixed w-full h-full flex flex-col items-center  overflow-hidden xs:px-3 filter-outline" :class="[view === 'Home' ? 'overflow-y-auto' : 'overflow-y-hidden']">


        <TemplateHeader class="z-50 sticky top-3 xs:top-6 xs:transform xs:-translate-y-2"/>
        
        <TemplateGrid class="absolute top-0 left-0"/>

        <TemplateNav class="z-50 sticky top-40 xs:top-26 transform -translate-y-8 xs:-translate-y-12"/>

        <TemplateBody class="mt-0 xs:mt-12"/>

        <TemplateFooter class="fixed bottom-1.5 xs:bottom-2 "/>
       
        <div class="fixed top-1/3 left-20 border-secondary border-l pb-10 -ml-0.25">
            <div class="w-1 h-6 bg-secondary rounded-full -ml-0.5 transform rotate-12 mt-4"/>
            <div class="w-0.25 h-20 bg-secondary rounded-full -mt-2 "/>
        </div>
        
        <h2 class="filter-outline-xs fixed top-0 text-secondary z-50 text-sm uppercase w-full text-center xs:mt-1">
            Local Services Wireframe 3
        </h2>
    </div>
</template>

<script setup>

  import { useStore } from 'vuex';
  import { computed } from 'vue'

  const store = useStore();

  const view = computed(() => { return store.state.view});

  import { ref, onMounted} from 'vue'

  const trigger = ref(false);
  onMounted(() => {
    setTimeout(() => {
        trigger.value = true
    }, 1000)
  })



</script>