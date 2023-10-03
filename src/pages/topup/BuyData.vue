<!-- <script setup>
import { ref } from "vue";
import LayoutVue from "../components/Layout.vue";
import NetworkCard from "../components/NetworkCard.vue";
import CardVue from "../components/Card.vue";
import { useNetworkProvider } from "../store/networkProvider";
const providers = useNetworkProvider();
</script>
<template>
  <LayoutVue>
    <CardVue class="py-5">
      <h1 class="text-2xl font-bold text-center">Select Your Data Provider</h1>
    </CardVue>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
      <NetworkCard
        v-for="provider in providers.providers"
        :provider="provider"
        :key="provider.name"
        class="transform transition duration-500 hover:scale-[1.2]"
      />
    </div>
  </LayoutVue>
</template>
<style></style> -->

<script setup>
import { ref, computed } from "vue";
import LayoutVue from "../../components/Layout.vue";
import ProviderCardVue from "../../components/ProviderCard.vue";
import CardVue from "../../components/Card.vue";
import CustomSelectVue from "../../components/CustomSelect.vue";

// importing the store with list of all networkProviders
import { useNetworkProvider } from "../../store/networkProvider";
import { useBuyData } from "../../store/buyData";

// declaring all the state
const providers = useNetworkProvider(); //from the store
const placeholderForNumber = ref("");
const placeholderForVtu = ref("");
const activeTab = ref("");
const dataOption = useBuyData();

function selectTab(tab) {
  activeTab.value = activeTab.value === tab ? "" : tab;
  placeholderForNumber.value = ` Enter ${activeTab.value} Phone Number `;
  placeholderForVtu.value = `${activeTab.value} VTU `;
}
const mtnValues = [
  {
    title: "100 DataPlan 100MB Daily Daily",
    value: "100 daily",
    amount: 100,
  },
  {
    title: "200 Data Plan 200MB 3-Day Plan Daily",
    value: "200 daily",
    amount: 200,
  },
];
const gloValues = [
  {
    title: "G 100 DataPlan 100MB Daily Daily",
    value: "100 daily",
    amount: 100,
  },
  {
    title: "G 200 Data Plan 200MB 3-Day Plan Daily",
    value: "200 daily",
    amount: 200,
  },
  {
    title: "G 350 1GB Daily Plan + 3mins Daily",
    value: "350 daily",
    amount: 350,
  },
];
const estisalateValue = [
  {
    title: " 9 350 1GB Daily Plan + 3mins Daily",
    value: "350 daily",
    amount: 350,
  },
  {
    title: " 9 600 2.5GB 2-Day Plan Daily",
    value: "600 daily",
    amount: 600,
  },
  {
    title: " 9  800 3GB 2-Days Bundle Daily",
    value: "800 daily",
    amount: 800,
  },
];
const airtelValue = [
  {
    title: "A 350 1GB Daily Plan + 3mins Daily",
    value: "350 daily",
    amount: 350,
  },
  {
    title: "A 600 2.5GB 2-Day Plan Daily",
    value: "600 daily",
    amount: 600,
  },
  {
    title: "A 800 3GB 2-Days Bundle Daily",
    value: "800 daily",
    amount: 800,
  },
];
const networkProvider = computed(() => {
  let returnValue;
  switch (activeTab.value) {
    case "MTN":
      dataOption.selectOption = {};
      returnValue = mtnValues;
      break;
    case "GLO":
      dataOption.selectOption = {};
      returnValue = gloValues;
      break;
    case "AIRTEL":
      dataOption.selectOption = {};
      returnValue = airtelValue;
      break;
    case "9MOBILE":
      dataOption.selectOption = {};
      returnValue = estisalateValue;
      break;
    default:
      dataOption.selectOption = {};
      returnValue = activeTab.value;
      break;
  }
  return returnValue;
});
</script>
<template>
  <LayoutVue>
    <CardVue class="py-3">
      <div class="mb-3 text-center">
        <h1 class="font-semibold text-2xl">Purchase Your Data</h1>
        <p class="italic text-[10px] text-green-500 font-medium mb-2">
          ...Get Instant Data Top up. Never be out of data again..
        </p>
      </div>

      <h5 class="text-lg font-medium mb-2 text-center mt-4">
        Choose your network provider
      </h5>
      <div
        class="grid grid-cols-2 min-[420px]:flex min-[420px]:justify-around gap-4 pt-0 mt-3"
      >
        <ProviderCardVue
          class=""
          v-for="provider in providers.providers"
          :provider="provider"
          :key="provider.name"
          @click="selectTab(provider.name)"
          :activeTab="activeTab"
        />
      </div>
    </CardVue>
    <CardVue class="py-5">
      <CardVue class="md:w-10/12 mx-auto">
        <h2 class="italic text-lg md:text-xl font-semibold text-center">
          Pay for Your Data bundle Securely
        </h2>
        <form action="" method="post">
          <input
            type="text"
            :placeholder="placeholderForNumber || 'Enter Phone Number'"
          />
          <input
            type="text"
            disabled
            :placeholder="placeholderForVtu || ' VTU'"
          />
          <div class="">
            <CustomSelectVue :networkProvider="networkProvider" />
            <p
              v-if="networkProvider === ''"
              class="text-red-500 italic text-sm"
            >
              Please choose your network provider
            </p>
          </div>
          <div
            class="flex w-full px-3 bg-[#F3F5F9] rounded-lg my-4 items-center"
          >
            <span>&#8358;</span>
            <input
              v-model="dataOption.selectOption.amount"
              disabled
              type="Number"
              placeholder=" Amount"
              class="w-full bg-transparent pl-1 py-2 border-none outline-none cursor-not-allowed"
            />
          </div>
          <button
            class="bg-green-500 text-primary text-center py-2 px-3 font-bold rounded-lg hover:bg-opacity-70"
          >
            Confirm Payment
          </button>
        </form>
      </CardVue>
    </CardVue>
  </LayoutVue>
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

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
