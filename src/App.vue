<script setup>
import content from './components/Content.vue'
</script>

<template>
  <main class="font-workSans text-[16px] grid place-content-center h-screen ">
    <img class="min-w-full max-w-[1680px] absolute -z-10" src="./assets/images/background-pattern-desktop.svg" alt="pattern-d">
    <div class="w-[380px] md:w-[600px] h-auto bg-white rounded-xl ">
      <div class="flex items-center px-10 py-12">
        <img src="./assets/images/icon-star.svg" alt="star">
        <h1 class="text-5xl font-bold ml-6">FAQs</h1>
      </div>
      <div class="w-full mb-4">
        <content />
      </div>
    </div>
  </main>
</template>

