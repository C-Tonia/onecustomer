<script setup>
import CardVue from "./Card.vue";
const { provider } = defineProps(["provider"]);
</script>
<template>
  <div>
    <CardVue class="py-2">
      <a href="">
        <div class="flex items-center gap-2">
          <div class="flex justify-center h-20 w-20 rounded-md overflow-hidden">
            <img :src="provider.img" alt="" class="w-full bg-contain" />
          </div>
          <p class="font-semibold">
            {{ provider.name }}
          </p>
        </div>
      </a>
    </CardVue>
  </div>
</template>
<style scoped></style>
