<template>
  <div>
    <Template
      :class="[
        'fixed w-full h-full top-0 left-0 -z-50',
        view !== 'Home' ? 'pointer-events-none' : 'pointer-events-auto'
      ]"/>

        <!-- no router view until filter safari issue is fixed
        <router-view  v-slot="{ Component }">
          <transition name="slide">
            <component :is="Component" :key="route.path" :content="content" class="z-50"  v-if="route.name !== 'Home'"  />
          </transition>
        </router-view> -->

      <LayoutNav class="fixed top-0 right-0"/>

     <UtilityFilters/>

     <router-view  v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component" />
        </transition>
      </router-view>

     <!-- <div :style="" class="fixed top-0 left-0 w-full h-full bg-red-200 mix-blend-color-burn"></div> -->
  </div>
</template>

<script setup>
  import axios from "axios";
  import { useRoute } from 'vue-router'
  import { ref, computed, watch, onMounted } from 'vue'
  import { useStore } from 'vuex';
  import bodyParser from "body-parser";
  
  const store = useStore();
  const route = useRoute();
  const isLoading = ref(true);
  const content = ref(null)
  const view = computed(() => { return store.state.view});

  // watch(() => route.path, (val) => {
  //   console.log('SET')
  //   if (val !== '/') {
  //     document.documentElement.style.setProperty('--color-secondary', 'hsl(221, 100%, 82%)');
  //     document.documentElement.style.setProperty('--color-tertiary', 'rgb(133, 110, 103)');
  //   } else {
  //     document.documentElement.style.setProperty('--color-secondary', 'rgb(133, 110, 103)');
  //     document.documentElement.style.setProperty('--color-tertiary', 'hsl(221, 100%, 82%)');
  //   }
  // })

  async function fetchContent() {
    axios
      .get("/content.json")
      .then((res) => {
        content.value = res.data
        isLoading.value = false;
      })
      .catch((err) => console.log(err));
  }

  onMounted(() => {
    console.log('MOUNTING')
    
    setTimeout(() => {
      let filterItems = document.querySelectorAll('.filter-outline, .filter-blur, .filter-outline-xs, .filter-blur-xl, .outline-tertiary')
      for (const el of filterItems) {
        el.style.transform = 'translateY(0.1px)'
      }
      document.body.classList.add('mounted')

    }, 1)
  })

</script>

<style lang="scss">

  body {
    opacity: 0;
    transition: opacity 800ms linear;
  }
  .mounted {
    opacity: 1;
  }

  .filter-outline {
      filter: url(#outline);
    }

    .filter-outline-xs {
      filter: url(#outline-xs);
    }

    .filter-outline-tertiary {
      filter: url(#outline-tertiary);
    }

    .filter-blur {
      filter: url(#blur);
    }

    .filter-blur-xl {
      filter: url(#blur-xl);
    }

  .wireframe-text {
    @apply text-white;
    -webkit-text-stroke: 0.9rem var(--color-primary);
  }


  .slide-enter-active,
  .slide-leave-active {
    transition: all 400ms ease-out;
    position: fixed;
    @apply border-t border-secondary;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100vw);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 1000ms ease-out;
    @apply opacity-0;
  }

  .fade-enter-from,
  .fade-leave-to {
    @apply opacity-100;
  }

</style>
