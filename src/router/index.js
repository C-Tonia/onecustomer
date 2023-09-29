import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Electricity from "../pages/electricity/Electricity.vue";
import BuyAirtime from "../pages/topup/BuyAirtime.vue";
import BuyData from "../pages/topup/BuyData.vue";
import BuyTvSub from "../pages/tv-subscription/BuyTvSub.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Dashboard,
    },
    {
      path: "/electricity",
      component: Electricity,
    },
    {
      path: "/buy-airtime",
      component: BuyAirtime,
    },
    {
      path: "/buy-data",
      component: BuyData,
    },
    {
      path: "/buy-tv-sub",
      component: BuyTvSub,
    },
  ],
});

export default router;
