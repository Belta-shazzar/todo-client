<template>
  <div>
    <div
      class="h-screen w-screen flex items-center justify-center"
      :style="{ backgroundImage: `url(${auth})` }"
    >
      <div
        id="auth-card"
        class="w-[90%] min-h-[396px] flex items-center justify-center rounded-xl md:w-[702px] md:min-h-[547px]"
        :class="dynamicBgClass"
      >
        <div id="inner-auth-card" class="w-[90%] min-h-[332px]" :class="dynamicTextClass">
          <div id="head-text" class="text-center">
            <h1 class="text-[32px] font-bold md:text-[60px]" :class="dynamicTitleColor">
              TaskOrbit
            </h1>
            <p class="font-normal text-[12px] md:text-[24px]">
              Start organizing your life day by day
            </p>
          </div>

          <form action="" method="post" class="text-center mt-10 w-full">
            <div id="input-section" class="flex gap-4 flex-col mb-10 md:mx-8 md:gap-8 md:mb-14">
              <input
                type="text"
                name="username"
                placeholder="Username"
                id=""
                class="rounded-md w-full py-2 px-3 placeholder:text-[#b5b5b5] placeholder:text-[12px] outline-none text-text md:py-4 md:px-5 md:placeholder:text-[15px]"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                id=""
                class="rounded-md w-full py-2 px-3 placeholder:text-[#b5b5b5] placeholder:text-[12px] outline-none text-text md:py-4 md:px-5 md:placeholder:text-[15px]"
              />
            </div>
            <slot />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import auth from '../../assets/svg/auth.svg'

interface Props {
  backgroundColor: string
  textColor: string
  titleColor: string
}

const props = defineProps<Props>()

const dynamicBgClass = computed(() => {
  return `bg-${props.backgroundColor}`
})

const dynamicTextClass = computed(() => {
  return `text-${props.textColor}`
})

const dynamicTitleColor = computed(() => {
  const color = props.titleColor === 'null' ? 'white' : props.titleColor
  return `text-${color}`
})
</script>

<style scoped>
input {
  box-shadow:
    2px 2px 8px rgba(0, 0, 0, 0.13),
    3.2px 2.4px 10px rgba(0, 0, 0, 0.15);
}

#auth-card {
  box-shadow:
    2px 5px 8px rgba(0, 0, 0, 0.13),
    3.2px 8px 10px rgba(0, 0, 0, 0.15);
}
</style>
