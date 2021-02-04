<template>
  <div class="detail">
    <detail-nav-bar :NavBar_data="['商品', '参数', '评论', '推荐']" />
    <better-scroll class="better-scroll" ref="scroll">
      <detail-swiper :images="topImages" @imgload="imgload"/>
      <detail-main-msg :itemInfo="itemInfo" />
      <detail-shop-msg :shopInfo="shopInfo" />
      <detail-msg :detailInfo="detailInfo" @imgload="imgload"/>
      <detail-rule-msg :ruleData="ruleData"/>
      <detail-comment-msg :commentInfo="commentInfo"/>
    </better-scroll>
  </div>
</template>

<script>
//公共组件

//子组件
import DetailNavBar from "./childComps/detailNavBar.vue";
import DetailSwiper from "./childComps/detailSwiper.vue";
import DetailMainMsg from "./childComps/detailMainMsg.vue";
import DetailShopMsg from "./childComps/detailShopMsg.vue";
import DetailMsg from './childComps/detail_Msg.vue';
import detailRuleMsg from './childComps/detailRuleMsg.vue';
import DetailCommentMsg from './childComps/detailCommentMsg.vue';

import BetterScroll from "../../components/common/betterScroll/BetterScroll.vue";

//网络请求
import {
  getMainData,
  getRuleData,
  itemInfo,
  getShopData,
  getInfoData,
  getCommentData,
} from "@/network/details.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailMainMsg,
    DetailShopMsg,
    BetterScroll,
    DetailMsg,
    detailRuleMsg,
    DetailCommentMsg,
  },
  data() {
    return {
      d_id: null,
      mainData: null,
      topImages: null,
      ruleData: null,
      itemInfo: null,
      shopInfo: null,
      detailInfo: null,
      commentInfo: null
    };
  },
  //生命周期函数
  created() {
    this.d_id = this.$route.params.d_id;
    this.getMainData(this.d_id);
    this.getRuleData(this.d_id);
    this.getShopData(this.d_id);
    this.getInfoData(this.d_id);
    this.getCommentData(this.d_id);
  },
  mounted() {},
  //自定义函数
  methods: {
    //网络请求
    getMainData(d_id) {
      getMainData(d_id).then((res) => {
        this.mainData = res;
        this.topImages = res.topImages;
        this.itemInfo = new itemInfo(res);
      });
    },
    getRuleData(d_id) {
      getRuleData(d_id).then((res) => {
        this.ruleData = res;
        console.log(res);
      });
    },
    getShopData(d_id) {
      getShopData(d_id).then((res) => {
        this.shopInfo = res;
      });
    },
    getInfoData(d_id){
      getInfoData(d_id).then(res=>{
        this.detailInfo = res
      })
    },
    getCommentData(d_id){
      getCommentData(d_id).then(res=>{
        this.commentInfo = res
      })
    },
    //事件监听
    imgload(){
      this.$refs.scroll.scrollRefresh()
    },
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 1001;
  background-color: #fff;
}
.better-scroll{
  height: calc(100vh - 44px);
  overflow:hidden;
}
</style>