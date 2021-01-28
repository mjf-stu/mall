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
    <home-tab-control :pop="goods.pop" :news="goods.news" :tuijian="goods.tuijian"/>
    <router-view></router-view>
    
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Swiper from "@/components/common/swiper/swiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import PopularView from './childComps/PopularView.vue';  
import HomeTabControl from './childComps/HomeTabControl.vue';

import { getMultidata , getPopular} from "@/network/home.js";

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
    getPopular().then(res=>{
      // 获取信息后并重定向到子页面这样能保证传递数据
      this.goods.pop.page+=1
      this.goods.pop.goodslist=res
       this.$router.push({path:'/home/popular',query:this.goods.pop}).catch((error) => {});
      // this.goods.news.page+=1
      // this.goods.news.goodslist=res.filter((item)=>item.type==='news')
      // this.goods.tuijian.page+=1
      // this.goods.tuijian.goodslist=res.filter((item)=>item.type==='tuijian')
    })
  },
};
</script>

<style>
#home{
  height: 1000px;
}
.bcolor {
  background-color: #88cbed;
  
}
</style>