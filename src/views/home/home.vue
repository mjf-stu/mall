<template>
  <div id="home">
    <nav-bar class="bcolor">
      <template v-slot:title>
        <span>首页</span>
      </template>
    </nav-bar>
    <better-scroll
      class="scroll"
      ref="scroll"
      @changeScroll="changeScroll"
      :probetype="3"
      @pullingUpload="pullingUpload"
      :isupload="true"
    >
      <template>
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

        <new-tab-control
          :itemNames="['流行', '新款', '精选']"
          @changeItem="changeItem"
        />
        <new-goods-container :mallData="goods[type].goodslist" />
      </template>
    </better-scroll>
    <back-top @click.native="toBackTop" v-show="BackTop_isShow" />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Swiper from "@/components/common/swiper/swiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import PopularView from "./childComps/PopularView.vue";
import HomeTabControl from "./childComps/HomeTabControl.vue";
import GoodsContainer from "../../components/common/goodsItem/goodsContainer.vue";
import NewTabControl from "../../components/common/tabcontrol/newTabControl.vue";
import NewGoodsContainer from "../../components/common/goodsItem/newGoodsContainer.vue";
import BetterScroll from "../../components/common/betterScroll/BetterScroll.vue";
import BackTop from "@/components/common/backTop/BackTop.vue";

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
    NewGoodsContainer,
    BetterScroll,
    BackTop,
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
      type: "popular",
      BackTop_isShow: false,
    };
  },
  created() {
    this.getMultidata();
    this.getGoods("popular");
    this.getGoods("news");
    this.getGoods("tuijian");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.scrollRefresh, 500);
    this.$bus.$on("imgLoad", () => {
      if (this.$refs.scroll !== null&&this.$refs.scroll.scrollRefresh!==undefined) {
        refresh()
        // this.$refs.scroll.scrollRefresh();
      }
    });
  },
  methods: {
    /**
     * 防抖动函数（优化）
     */
    debounce(fun, dely) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          console.log(this);
          fun.apply(null, args);
        }, dely);
      };
    },
    /**
     * 事件监听
     */
    changeItem(index) {
      switch (index) {
        case 0:
          this.type = "popular";
          break;
        case 1:
          this.type = "news";
          break;
        case 2:
          this.type = "tuijian";
          break;
      }
    },

    toBackTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    changeScroll(y) {
      if (y <= -505) {
        this.BackTop_isShow = true;
      } else {
        this.BackTop_isShow = false;
      }
    },

    pullingUpload(bs) {
      this.getGoods(this.type, bs);
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
    getGoods: function (type, bs = null) {
      //获取1*4条数据且数据中的type为popular
      getGoods(this.goods[type].page + 1, type).then((res) => {
        // 获取信息后并重定向到子页面这样能保证传递数据
        this.goods[type].page += 1;
        this.goods[type].goodslist = res;

        if (bs !== null) {
          bs.finishPullUp();
        }
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.bcolor {
  background-color: #88cbed;
}
.scroll {
  position: absolute;
  top: 44px;
  bottom: 50px;
  overflow: hidden;
  /* height: calc(100% - 94px);
  overflow: hidden;
  padding-top: 44px; */
}
</style>