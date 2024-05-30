<template>
  <div class="block md:flex h-screen overflow-y-hidden">
    <div
      id="sidebar"
      class="hidden md:block basis-1/6 w-[320px] border-r border-solid border-gray-200"
    >
      <div class="text-center">
        <h1 class="text-secondary text-3xl font-bold py-4 hidden md:block">TaskOrbit</h1>
      </div>

      <div class="flex justify-center py-2 mt-6">
        <button id="head-btn-sb" class="bg-white flex items-center gap-6 px-10 py-4 rounded">
          <p class="font-medium text-sm">Add Task</p>
          <img :src="addButton" alt="Icon" class="w-[22px] h-[22px]" />
        </button>
      </div>

      <div id="menu" class="mt-14 text-center text-text">
        <p class="bg-primary mb-8 text-sm py-3">Dashboard</p>
        <p class="bg-primaryy mb-8 text-sm py-3">Active</p>
        <p class="bg-primaryy mb-8 text-sm py-3">Completed</p>
      </div>
    </div>
    <div class="basis-5/6">
      <header class="flex justify-between items-center px-3 py-4 md:px-20">
        <h1 class="text-secondary text-lg font-bold md:hidden">TaskOrbit</h1>
        <h1 class="text-text text-2xl  hidden md:block">Dashboard</h1>

        <div class="flex gap-2">
          <button
            id="head-btn"
            class="bg-white flex items-center gap-2 px-2 py-2 rounded md:hidden"
          >
            <p class="font-medium text-[10px]">Add Task</p>
            <img :src="addButton" alt="Icon" class="w-[14px] h-[14px]" />
          </button>

          <button id="signout-btn" class="bg-secondary flex items-center gap-2 px-2 py-2 rounded md:px-6 md:py-[14px] md:rounded-md">
            <p class="font-medium text-[10px] text-white md:text-[14px]">Sign Out</p>
            <img :src="logout" alt="Icon" class="w-[14px] h-[14px]" />
          </button>
        </div>
      </header>

      <div id="dropdown" class="pb-6 mt-6 flex justify-center relative md:hidden">
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

      <div class="relative pb-10 overflow-x-hidden md:overflow-y-hidden md:mt-12">
        <div id="warm" class="bg-white text-text h-[132px] mx-6 flex items-center px-3 rounded-md md:mx-32 md:h-[210px] md:px-16 ">
          <div id="text" class="">
            <h1 class="font-bold text-text text-[15px] md:text-[44px] md:mb-2">Hello, Beautiful Human!</h1>
            <p class="text-[10px] text-text md:text-[16px]">What do you want to do today?</p>
          </div>

          <img :src="warm" alt="Icon" class="w-[151px] h-[161px] absolute bottom-0 right-[-6px] md:w-[250px] md:h-[260px] md:right-[356px] md:bottom-[-20px]" />
        </div>
      </div>

      <div id="tasks" class="md:flex flex-row-reverse md:justify-center md:px-32">
        <div id="metrices" class="flex text-white gap-4 justify-center px-6 md:flex-col md:basis-2/6">
          <div
            class="bg-secondary flex gap-3 justify-center items-center py-[13px] w-[145px] rounded-md md:flex-col md:py-6 md:gap-6"
          >
            <img :src="completed" alt="Icon" class="w-[20px] h-[20px] md:w-[56px] md:h-[56px]" />
            <div class="text-center">
              <h2 class="font-bold text-sm md:text-[32px] md:mb-3">40%</h2>
              <p class="text-[10px] md:font-normal md:text-[13px]">Completed Tasks</p>
            </div>
          </div>

          <div
            class="bg-primary flex gap-3 justify-center items-center py-[13px] w-[145px] rounded-md md:flex-col md:py-6 md:gap-6"
          >
            <img :src="active" alt="Icon" class="w-[20px] h-[20px] md:w-[56px] md:h-[56px]" />
            <div class="text-center">
              <h2 class="font-bold text-sm md:text-[32px] md:mb-3">60%</h2>
              <p class="text-[10px] md:font-normal md:text-[13px]">Active Tasks</p>
            </div>
          </div>
        </div>

        <div id="task-listing" class="bg-white text-text mt-8 md:basis-4/6">
          <div class="flex mx-6 justify-between items-center">
            <h2 class="font-bold text-[14px]">Today's Tasks</h2>

            <div class="flex text-[8px] gap-3">
              <p class="text-secondary">Delete All</p>

              <p id="date" class="md:hidden">Monday, 18 December 2023</p>
            </div>
          </div>

          <div id="task-list" class="mt-6 px-6 py-3 h-[390px] overflow-y-scroll">
            <div
              v-for="n in 20"
              :key="n"
              id="task"
              class="rounded-md mb-2 px-5 py-3 flex gap-3 items-center"
            >
              <img :src="tickActive" alt="Icon" class="w-[20px] h-[20px]" />
              <p class="text-xs">Task {{ n }}</p>
            </div>
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
#options,
#task {
  box-shadow:
    2px 2px 9px rgba(0, 0, 0, 0.13),
    -2px 0 9px rgba(0, 0, 0, 0.13);
}

#warm {
  box-shadow:
    2px 2px 9px rgba(0, 0, 0, 0.08),
    -2px 0 9px rgba(0, 0, 0, 0);
}

#head-btn-sb, #warm {
  box-shadow:
    2px 2px 9px rgba(0, 0, 0, 0.08),
    -2px -2px 9px rgba(0, 0, 0, 0.08);
}

#task {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
