<!-- <script setup>

import LayoutVue from "../components/Layout.vue";
import NetworkCard from "../components/NetworkCard.vue";
import CardVue from "../components/Card.vue";
import { useNetworkProvider } from "../store/networkProvider";
const providers = useNetworkProvider();
</script>
<template>
  <LayoutVue>
    <CardVue class=" py-5">
      <h1 class="text-2xl font-bold text-center">
        Select Your Network Provider
      </h1>
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
import { ref } from "vue";
import LayoutVue from "../../components/Layout.vue";
import ProviderCardVue from "../../components/ProviderCard.vue";
import CardVue from "../../components/Card.vue";
// importing the store with list of all networkProviders
import { useNetworkProvider } from "../../store/networkProvider";

const providers = useNetworkProvider(); //from the store
const placeholderForNumber = ref("");
const placeholderForVtu = ref("");

const activeTab = ref("");
function selectTab(tab) {
  activeTab.value = activeTab.value === tab ? "" : tab;
  placeholderForNumber.value = ` Enter ${activeTab.value} Phone Number `;
  placeholderForVtu.value = `${activeTab.value} VTU `;
}
</script>
<template>
  <LayoutVue>
    <CardVue class="py-3">
      <div class="mb-3 text-center">
        <h1 class="font-semibold text-2xl md:leading-3">
          Purchase Your Airtime
        </h1>
        <p class="italic text-[10px] text-green-500 font-medium">
          ...Get instant Airtime Top up. Never be out of airtime again..
        </p>
      </div>

      <h5 class="text-lg font-medium my-2">Choose your network provider</h5>
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
          Pay for Your Airtime VTU Securely
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
          <div
            class="flex w-full px-3 bg-[#F3F5F9] rounded-lg my-4 items-center"
          >
            <span>&#8358;</span>
            <input
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
