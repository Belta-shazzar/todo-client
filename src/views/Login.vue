<template>
  <div>
    <AuthScreen
      backgroundColor="white"
      textColor="text"
      buttonBackground="primary"
      titleColor="secondary"
    >
      <div id="btn-link" class="">
        <button type="submit" class="text-xs py-3 px-6 rounded-md bg-primary text-text md:py-4 md:px-12 md:text-[15px]">
          <!-- :class="[dynamicButtonColor, dynamicTextClass]" -->
          Sign In
        </button>

        <p class="text-[12px] mt-4 md:text-[15px]">
          Don’t have an account? Create
          <RouterLink to="/sign-in" class="text-secondary">here</RouterLink>.
        </p>
      </div>
    </AuthScreen>
  </div>
</template>

<script setup lang="ts">
import AuthScreen from '@/components/layout/AuthScreen.vue'
</script>

<style scoped></style>
