<template>
  <div id="home">
    <nav-bar class="bcolor">
      <template v-slot:title>
        <span>首页</span>
      </template>
    </nav-bar>
    <swiper :swiperData="banners" />
    <recommend-view :recommendData="recommends"/>
    <popular-view :recommendData="recommends"/>
    <home-tab-control/>
    <router-view></router-view>
    <ul>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Swiper from "@/components/common/swiper/swiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import PopularView from './childComps/PopularView.vue';  
import HomeTabControl from './childComps/HomeTabControl.vue';

import { getMultidata , getChildCompentData} from "@/network/home.js";

export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
    PopularView,
    HomeTabControl,
  },
  name: "home",
  data: function () {
    return {
      banners: [],
      recommends: [],
      goods:{
        pop:{
          page:0,
          goodslist:[]
        },
        news:{
          page:0,
          goodslist:[]
        },
        tuijian:{
          page:0,
          goodslist:[]
        }
      }
    };
  },
  created() {
    getMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    getChildCompentData().then(res=>{
      console.log(res+"---请求后台");
    })
  },
};
</script>

<style>
.bcolor {
  background-color: #88cbed;
}
</style>