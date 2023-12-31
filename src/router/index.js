import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Electricity from "../pages/Electricity/Electricity.vue";
import ElectricityForm from "../pages/Electricity/ElectricityForm.vue";
import BuyAirtime from "../pages/BuyAirtime.vue";
import BuyData from "../pages/BuyData.vue";
import BuyTvSub from "../pages/BuyTvSub.vue";

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
      path: "/electricity/:name",
      component: ElectricityForm,
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
