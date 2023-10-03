<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
const NavItems = ref([
  { title: "Dashborad", icon: "ri-dashboard-line", routeTo: "/" },
  {
    title: "Electricity Bill",
    icon: "ri-battery-charge-line",
    routeTo: "/electricity",
  },
  {
    title: "Buy Airtime",
    icon: "ri-phone-line text-xl",
    routeTo: "/buy-airtime",
  },
  { title: "Buy Mobile Data", icon: "ri-global-line", routeTo: "/buy-data" },
  { title: "Buy TV Subscription", icon: "ri-tv-line", routeTo: "/buy-tv-sub" },
]);
</script>
<template>
  <nav class="w-1/5 bg-primary text-white fixed min-h-full">
    <h1 class="text-lg py-[1.15rem] px-6 font-semibold">Easy Pay</h1>
    <ul>
      <p class="pt-6 px-6 pb-1 text-xs text-gray-200">Bill Payments</p>
      <li
        class="py-2 px-[26px] hover:bg-sideHover"
        v-for="item in NavItems"
        :key="item.icon"
      >
        <RouterLink
          :to="item.routeTo"
          active-class=" text-white "
          class="flex items-center gap-3"
        >
          <i
            class="text-xl text-gray-400 hover:text-white"
            :class="item.icon"
          ></i>
          <span class="text-sm hover:text-gray-400">{{ item.title }}</span>
        </RouterLink>
      </li>
      <p class="pt-6 pb-1 px-6 text-xs text-gray-200">Page</p>
      <li class="py-2 px-[26px] hover:bg-sideHover">
        <a href="#" class="flex items-center gap-3">
          <i class="ri-user-3-line text-gray-400 text-xl"></i>
          <span class="text-sm">View Profile</span>
        </a>
      </li>
      <li class="py-2 px-[26px] hover:bg-sideHover">
        <a href="#" class="flex items-center gap-3">
          <i class="ri-share-line text-gray-400 text-xl"></i>

          <span class="text-sm">Share</span>
        </a>
      </li>
    </ul>
    <form action="" method="post" class="py-2 px-[26px] hover:bg-sideHover">
      <button
        type="submit"
        class="py-2 px-6 bg-[#142340] shadow shadow-white flex items-center gap-3"
      >
        <i class="ri-login-box-line text-xl text-gray-400"></i>
        <span class="text-sm">Logout</span>
      </button>
    </form>
  </nav>
</template>
<style scoped>
li:hover i {
  @apply text-white;
}
li:hover span {
  @apply text-gray-400;
}
</style>
