<script setup>
import LayoutVue from "../../components/Layout.vue";
import NetworkCard from "../../components/NetworkCard.vue";
import CardVue from "../../components/Card.vue";
import { useNetworkProvider } from "../../store/networkProvider";
const providers = useNetworkProvider();
</script>
<template>
  <LayoutVue>
    <CardVue class="py-5">
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
<style></style>
