<script setup>
import { ref, computed } from "vue";
import LayoutVue from "../../components/Layout.vue";
import ProviderCardVue from "../../components/ProviderCard.vue";
import CardVue from "../../components/Card.vue";
import CustomSelectVue from "../../components/CustomSelect.vue";

// importing the store with list of all networkProviders
import { useTvProviders } from "../../store/tvSub";

const providers = useTvProviders(); //from the store
const placeholderForTvType = ref("");
// const placeholderForVtu = ref("");

const activeTab = ref("");
function selectTab(tab) {
  activeTab.value = activeTab.value === tab ? "" : tab;
  switch (activeTab.value) {
    case "GOTV":
      placeholderForTvType.value = ` ${activeTab.value} IUC Number `;
      break;
    case "DSTV":
      placeholderForTvType.value = ` ${activeTab.value} Card Number `;
    case "STARTIMES":
      placeholderForTvType.value = ` ${activeTab.value} Card Number `;
      break;
    default:
      placeholderForTvType.value = ` Choose Your Cable Provider `;
      break;
  }
}

const dstvValue = [
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
const gotvValue = [
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
const startimesValue = [
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
    case "DSTV":
      providers.selectCableProvider = {};
      returnValue = dstvValue;
      break;
    case "GOTV":
      providers.selectCableProvider = {};

      returnValue = gotvValue;
      break;
    case "STARTIMES":
      providers.selectCableProvider = {};

      returnValue = startimesValue;
      break;

    default:
      providers.selectCableProvider = {};

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
        <h1 class="font-semibold text-2xl md:leading-3">
          Purchase Your Cable subscription
        </h1>
        <p class="italic text-[10px] text-green-500 font-medium">
          "Unlimited entertainment, one subscription away: Immerse yourself in
          endless entertainment."
        </p>
      </div>

      <h5 class="text-lg font-medium my-2">Choose your Cable provider</h5>
      <div class="grid grid-cols-2 min-[420px]:flex pt-0">
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
          Get Your Cable Subscription
        </h2>
        <form action="" method="post">
          <input
            required
            type="text"
            :placeholder="placeholderForTvType || 'Choose your Cable provider'"
          />
          <input
            type="text"
            disabled
            placeholder="Customer Name"
            class="cursor-not-allowed"
          />
          <div>
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
              required
              type="Number"
              placeholder=" Amount"
              disabled
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
