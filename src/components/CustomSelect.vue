<script setup>
const { networkProvider } = defineProps(["networkProvider"]);
import { useBuyData } from "../store/buyData";

const dataOption = useBuyData();
// const dataOption = ref(" ");
</script>
<template>
  <div class="relative">
    <select
      id="account_type"
      name="account_type"
      class="bg-[#F3F5F9] rounded-lg"
      v-model="dataOption.selectOption"
    >
      <option value="" selected disabled>Select A Plan</option>
      <option
        v-for="items in networkProvider"
        :value="items"
        :key="items.value"
      >
        {{ items.title }}
      </option>
    </select>
    <div
      class="text-center text-gray-400 absolute top-2 left-2"
      v-if="!dataOption.selectOption.title"
    >
      Select A Plan
    </div>
  </div>
</template>
<style scoped>
select {
  @apply appearance-none  w-full text-xs py-2 px-3 cursor-pointer outline-none;
}

/* .select:not(.select--multiple)::after */
</style>
