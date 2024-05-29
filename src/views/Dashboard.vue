<template>
  <div class="">
    <header class="flex justify-between items-center px-3 py-4">
      <h1 class="text-secondary text-lg font-bold">TaskOrbit</h1>

      <div class="flex gap-2">
        <button id="head-btn" class="bg-white flex items-center gap-2 px-2 py-2 rounded">
          <p class="font-medium text-[10px]">Add Task</p>
          <img :src="addButton" alt="Icon" class="w-[14px] h-[14px]" />
        </button>

        <button id="head-btn" class="bg-secondary flex items-center gap-2 px-2 py-2 rounded">
          <p class="font-medium text-[10px]">Sign Out</p>
          <img :src="logout" alt="Icon" class="w-[14px] h-[14px]" />
        </button>
      </div>
    </header>

    <div id="dropdown" class="pb-6 mt-6 w-screen flex justify-center relative">
      <div class="bg-primary flex justify-between items-center px-3 py-1 rounded-md w-[87.7%]">
        <h3 class="font-medium text-[12px]">Dashboard</h3>
        <img :src="point" alt="Icon" class="w-[14px] h-[14px]" />
      </div>

      <div
        id="options"
        class="bg-white px-3 py-1 rounded-b-md absolute w-[87.7%] top-[26px] hidden"
      >
        <p class="font-normal text-[12px] py-2">Active</p>
        <p class="font-nromal text-[12px] pb-2">Completed</p>
      </div>
    </div>

    <div class="relative pb-10 w-screen overflow-x-hidden">
      <div id="warm" class="bg-white text-text h-[132px] mx-6 flex items-center px-3 rounded-md">
        <div id="text" class="">
          <h1 class="font-bold text-[15px]">Hello, Beautiful Human!</h1>
          <p class="text-[10px]">What do you want to do today?</p>
        </div>

        <img :src="warm" alt="Icon" class="w-[151px] h-[161px] absolute bottom-0 right-[-6px]" />
      </div>
    </div>

    <div id="tasks">
      <div id="metrices" class="flex text-white gap-4 justify-center px-6">
        <div
          class="bg-secondary flex gap-3 justify-center items-center py-[13px] w-[145px] rounded-md"
        >
          <img :src="completed" alt="Icon" class="w-[20px] h-[20px]" />
          <div>
            <h2 class="font-bold text-sm">40%</h2>
            <p class="text-[10px]">Completed Tasks</p>
          </div>
        </div>

        <div
          class="bg-primary flex gap-3 justify-center items-center py-[13px] w-[145px] rounded-md"
        >
          <img :src="active" alt="Icon" class="w-[20px] h-[20px]" />
          <div>
            <h2 class="font-bold text-sm">60%</h2>
            <p class="text-[10px]">Active Tasks</p>
          </div>
        </div>
      </div>

      <div id="task-listing" class="bg-white text-text mt-8">
        <div class="flex mx-6 justify-between items-center">
          <h2 class="font-bold text-[14px]">Today's Tasks</h2>

          <div class="flex text-[8px] gap-3">
            <p class="text-secondary">Delete All</p>

            <p id="date">Monday, 18 December 2023</p>
          </div>
        </div>

        <div id="task-list" class="mt-6">
          <div v-for="n in 20" :key="n" id="task" class="mx-6 rounded-md mb-2 px-5 py-3 flex gap-3 items-center">
            <img :src="tickActive" alt="Icon" class="w-[20px] h-[20px]" />
            <p class="text-xs">Task {{ n }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import tickCompleted from '../assets/svg/tick-completed.svg'
import tickActive from '../assets/svg/tick-active.svg'
import addButton from '../assets/svg/add-button.svg'
import completed from '../assets/svg/completed.svg'
import active from '../assets/svg/active.svg'
import logout from '../assets/svg/logout.svg'
import point from '../assets/svg/point.svg'
import warm from '../assets/svg/warm.svg'
</script>

<style scoped>
#head-btn,
#options, #task {
  box-shadow:
    2px 2px 9px rgba(0, 0, 0, 0.13),
    -2px 0 9px rgba(0, 0, 0, 0.13);
}

#warm {
  box-shadow:
    2px 2px 9px rgba(0, 0, 0, 0.08),
    -2px 0 9px rgba(0, 0, 0, 0);
}

#task {
  box-shadow:
    2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
