<template>
  <div id="home">
    <nav-bar class="bcolor">
      <template v-slot:title>
        <span>首页</span>
      </template>
    </nav-bar>
    <swiper :swiperData="banners" />
    <recommend-view :recommendData="recommends" />
    <popular-view :recommendData="recommends" />
    <!-- <home-tab-control
      :popular="goods.popular"
      :news="goods.news"
      :tuijian="goods.tuijian"
    /> -->
    <!-- <router-view></router-view> -->
    <!-- <goods-container/> -->
    <new-tab-control :itemNames='["流行","新款","精选"]' @changeItem='changeItem'/>
    <new-goods-container :mallData="goods[type].goodslist"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Swiper from "@/components/common/swiper/swiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import PopularView from "./childComps/PopularView.vue";
import HomeTabControl from "./childComps/HomeTabControl.vue";
import GoodsContainer from '../../components/common/goodsItem/goodsContainer.vue';
import NewTabControl from '../../components/common/tabcontrol/newTabControl.vue';
import NewGoodsContainer from '../../components/common/goodsItem/newGoodsContainer.vue';

import { getMultidata, getGoods } from "@/network/home.js";

export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
    PopularView,
    HomeTabControl,
    GoodsContainer,
    NewTabControl,
    NewGoodsContainer
  },
  name: "home",
  data: function () {
    return {
      banners: [],
      recommends: [],
      goods: {
        popular: {
          page: 0,
          goodslist: [],
        },
        news: {
          page: 0,
          goodslist: [],
        },
        tuijian: {
          page: 0,
          goodslist: [],
        },
      },
      type:'popular'
    };
  },
  created() {
    this.getMultidata();
    this.getGoods('popular');
    this.getGoods('news');
    this.getGoods('tuijian');
  },
  mounted() {
    this.$router.push({ path: "/home/popular", query: this.goods.popular })
      .catch((error) => {});
  },
  methods: {
    /**
     * 事件监听
     */
    changeItem(index){
      switch(index){
        case 0:
          this.type='popular'
          break
        case 1:
          this.type='news'
          break
        case 2:
          this.type='tuijian'
          break
      }
    },

    /**
     * 网络请求
     */
    getMultidata: function () {
      getMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoods:function(type){
      //获取1*4条数据且数据中的type为popular
       getGoods(this.goods[type].page+1,type).then((res) => {
      // 获取信息后并重定向到子页面这样能保证传递数据
      this.goods[type].page += 1;
      this.goods[type].goodslist = res;
       this.$router.push({ path: "/home/popular", query: this.goods.popular })
      .catch((error) => {});
    });
    }
  },
};
</script>

<style>
#home {
  padding-bottom: 50px;
}
.bcolor {
  background-color: #88cbed;
}
</style>