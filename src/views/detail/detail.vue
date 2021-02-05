<template>
  <div class="detail">
    <detail-nav-bar :NavBar_data="['商品', '参数', '评论', '推荐']" @selectShow="selectShow"/>
    <better-scroll class="better-scroll" ref="scroll">
      <detail-swiper :images="topImages" @imgload="imgload" ref="swiper"/>
      <detail-main-msg :itemInfo="itemInfo" />
      <detail-shop-msg :shopInfo="shopInfo" />
      <detail-msg :detailInfo="detailInfo" @imgload="imgload"/>
      <detail-rule-msg :ruleData="ruleData" ref="rule"/>
      <detail-comment-msg :commentInfo="commentInfo" ref="comment"/>
      <detail-recommend-msg :recommendInfo="recommendInfo" ref="recommend"/>
    </better-scroll>
  </div>
</template>

<script>

//公共组件
import BetterScroll from "../../components/common/betterScroll/BetterScroll.vue";

//子组件
import DetailNavBar from "./childComps/detailNavBar.vue";
import DetailSwiper from "./childComps/detailSwiper.vue";
import DetailMainMsg from "./childComps/detailMainMsg.vue";
import DetailShopMsg from "./childComps/detailShopMsg.vue";
import DetailMsg from './childComps/detail_Msg.vue';
import detailRuleMsg from './childComps/detailRuleMsg.vue';
import DetailCommentMsg from './childComps/detailCommentMsg.vue';
import DetailRecommendMsg from './childComps/detailRecommendMsg.vue'


//网络请求
import {
  getMainData,
  getRuleData,
  itemInfo,
  getShopData,
  getInfoData,
  getCommentData,
  getRecommendData,
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
    DetailRecommendMsg,
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
      commentInfo: null,
      recommendInfo: null,
      shopY:0,
      ruleY:0,
      commentY:0,
      recommendY:0,
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
    this.getRecommendData(this.d_id);
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
    getRecommendData(d_id){
      getRecommendData(d_id).then(res=>{
        console.log(res);
        this.recommendInfo = res
      })
    },
    //事件监听
    imgload(){
      this.$refs.scroll.scrollRefresh()
      this.shopY=-(this.$refs.swiper.$el.offsetTop-44)
      this.ruleY=-(this.$refs.rule.$el.offsetTop-44)
      this.commentY=-(this.$refs.comment.$el.offsetTop-44)
      this.recommendY=-(this.$refs.recommend.$el.offsetTop-44)
    },

    selectShow(index){
      if(index === 0){
        this.$refs.scroll.scrollTo(0,this.shopY)
      }
      else if(index === 1){
        this.$refs.scroll.scrollTo(0,this.ruleY)
      }
      else if(index === 2){
        this.$refs.scroll.scrollTo(0,this.commentY)
      }
      else{
        this.$refs.scroll.scrollTo(0,this.recommendY)
      }
    }
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