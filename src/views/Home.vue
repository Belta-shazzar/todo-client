<template>
  <div>
    <div class="h-[70vh] flex relative overflow-hidden text-text">
      <nav
        class="fixed z-30 top-0 left-0 w-full text-white py-2 pl-2 font-semibold md:font-extrabold md:text-xl md:py-4 md:pl-4"
        :class="{ scroll: isScrolled }"
      >
        <h1>TaskOrbit</h1>
      </nav>
      <video
        class="absolute top-0 left-0 w-full h-full object-cover z-10"
        src="/src/assets/vids/bg-vid.webm"
        autoplay
        muted
        loop
      ></video>

      <div class="bg-black/60 z-20 w-full h-full flex justify-center items-end">
        <div class="text-white text-center h-[60%]">
          <h1 class="font-extrabold text-3xl mb-2 md:text-5xl md:mb-4">Welcome to TaskOrbit</h1>
          <p class="font-medium md:text-xl">
            Your ultimate task management tool to boost productivity.
          </p>
          <button
            class="g-btn bg-primary py-3 px-6 font-semibold rounded-md mt-6 md:py-4 md:px-8 md:text-xl md:mt-10 hover:bg-transparent hover:border hover:border-primary hover:text-primary"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>

    <main class="p-5">
      <section class="py-10 text-center">
        <h2 class="font-semibold text-2xl">Features</h2>
        <div class="md:grid grid-cols-2 gap-4">
          <div
            class="bg-white p-5 m-2 border border-secondary rounded-md flex-basis-30%"
          >
            <h3>Easy to Use</h3>
            <p>Our intuitive design lets you manage tasks effortlessly.</p>
          </div>
          <div
            class="bg-white p-5 m-2 border border-secondary rounded-md flex-basis-30%"
          >
            <h3>Stay Organized</h3>
            <p>Keep track of your tasks and deadlines efficiently.</p>
          </div>
          <div
            class="bg-white p-5 m-2 border border-secondary rounded-md text-center col-span-2"
          >
            <h3>Collaborate</h3>
            <p>Share tasks with your team and work together seamlessly.</p>
          </div>
        </div>
      </section>

      <section class="py-10 text-center">
        <h2 class="font-semibold text-2xl">What Our Users Say</h2>
        <div class="flex justify-around flex-wrap">
          <div class="bg-white p-5 m-2 border border-secondary rounded-md flex-basis-30%">
            <p>"TodoApp has transformed how I manage my daily tasks!" - Jane Doe</p>
          </div>
          <div
            class="bg-white p-5 m-2 border border-secondary rounded-md flex-basis-30%"
          >
            <p>"The best task manager I've ever used. Highly recommend!" - John Smith</p>
          </div>
          <div
            class="bg-white p-5 m-2 border border-secondary rounded-md flex-basis-30%"
          >
            <p>"Simple, effective, and great for team projects." - Emily Davis</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="text-center py-5 bg-primary text-white">
      <p>&copy; 2024 TaskOrbit. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  console.log('Hello orbit')
  if (window.scrollY > 10) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll {
  background-color: #edb046;
}

nav {
  transition: background-color ease-in-out 500ms;
}

.g-btn {
  transition: all ease-out 500ms;
}

/* .feature-item,
.testimonial-item {
  background-color: white;
  padding: 20px;
  margin: 10px;
  border: 1px solid var(--secondary);
  border-radius: 8px;
  flex-basis: 30%;
} */
</style>
