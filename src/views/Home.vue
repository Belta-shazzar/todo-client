<template>
  <div class="bg-red0-300 gap-2 h-screen m-2 flex flex-col">
    <div class=" flex flex-col justify-center basis-1/3 text-secondary font-black text-[42px] bg-green0-300 pl-3">
      <p>To-Do</p>
      <p>Application</p>
    </div>

    <div class="animation flex basis-2/3 justify-center bg-blue0-300 h-full">
        <div>
            <img :src="animeImage" alt="Animated image for the home screen">
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import animeImage from "../assets/svg/image 1.svg"
</script>

<style scoped></style>
