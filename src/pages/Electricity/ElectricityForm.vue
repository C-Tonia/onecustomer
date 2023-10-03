<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import Card from "../../components/Card.vue";
import Layout from "../../components/Layout.vue";
const selectOption = ref("");
const meterType = ref(["Prepaid", "Postpaid"]);
const route = useRoute();
const { name } = route.params;

const distributionName = computed(() => {
  let title = name.split(" ");
  let firstCharacter = title[0].charAt(0).toUpperCase();
  return firstCharacter + title[0].slice(1);
});
</script>
<template>
  <Layout>
    <Card class="py-3">
      <div class="text-center">
        <h1 class="font-semibold text-2xl leading-7">
          Buy {{ distributionName }} Token
        </h1>
        <p class="italic text-[10px] text-green-500 font-medium px-8">
          Hassle-free bill payments at your fingertips!"
        </p>
      </div>
    </Card>
    <Card class="py-5">
      <Card class="md:w-10/12 mx-auto">
        <form action="" method="post">
          <select
            id="account_type"
            name="account_type"
            class="bg-[#F3F5F9] rounded-lg"
            v-model="selectOption"
          >
            <option value="" disabled placeholder=" kkkkk">
              Select Meter Type
            </option>
            <option v-for="meter in meterType" :key="meter" :value="meter">
              {{ meter }}
            </option>
          </select>
          <input type="text" placeholder="Enter meter number " required />

          <input type="text" placeholder="Enter Phone Number" required />
          <input type="text" placeholder="Enter Email Address" />

          <div
            class="flex w-full px-3 bg-[#F3F5F9] rounded-lg my-4 items-center"
          >
            <span>&#8358;</span>
            <input
              required
              type="Number"
              placeholder=" Amount"
              class="w-full bg-transparent pl-1 py-2 border-none outline-none"
            />
          </div>
          <button
            class="bg-green-500 text-primary text-center py-2 px-3 font-bold rounded-lg hover:bg-opacity-70"
          >
            Confirm Payment
          </button>
        </form>
      </Card>
    </Card>
  </Layout>
</template>
<style scoped>
input[type="text"] {
  @apply block w-full py-2 px-3 bg-[#F3F5F9] rounded-lg my-4 border-none outline-none;
}
input[type="text"]:disabled::placeholder {
  @apply text-black font-bold;
}
input::placeholder {
  @apply text-xs;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
select {
  @apply appearance-none  w-full  py-2 px-3 cursor-pointer outline-none;
}
</style>
