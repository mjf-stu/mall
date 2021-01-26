<template>
  <div id="home">
    <nav-bar class="bcolor">
      <template v-slot:title>
        <span>首页</span>
      </template>
    </nav-bar>
    <swiper :swiperData="banners" />
    <recommend-view :recommendData="recommends"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Swiper from "@/components/common/swiper/swiper.vue";
import RecommendView from "./childComps/RecommendView.vue";

import { getMultidata } from "@/network/home.js";

export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
  },
  name: "home",
  data: function () {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
.bcolor {
  background-color: #88cbed;
}
</style>