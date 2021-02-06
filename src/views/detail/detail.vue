<template>
  <div class="detail">
    <detail-nav-bar 
    :NavBar_data="['商品', '参数', '评论', '推荐']" 
    @selectShow="selectShow"
    ref="navBar"/>
    <better-scroll 
    class="scroll" 
    ref="scroll" 
    :probetype="3"
    @changeScroll="changeScroll"
    :isupload="true"
    >
      <template>
      <detail-swiper :images="topImages" @imgload="imgload" ref="swiper"/>
      <detail-main-msg :itemInfo="itemInfo" />
      <detail-shop-msg :shopInfo="shopInfo" />
      <detail-msg :detailInfo="detailInfo" @imgload="imgload"/>
      <detail-rule-msg :ruleData="ruleData" ref="rule"/>
      <detail-comment-msg :commentInfo="commentInfo" ref="comment"/>
      <detail-recommend-msg :recommendInfo="recommendInfo" ref="recommend"/>
      </template>
    </better-scroll>
    <detail-tool-bar/>
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
import DetailToolBar from './childComps/detailToolBar.vue';


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
    DetailToolBar,
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
      itemScrollTop:[],
      shopY:0,
      ruleY:0,
      commentY:0,
      recommendY:0,
      // toolBarInfo:[["/src/assets/img/detail_icon/dianpu.svg","~@/assets/img/detail_icon_pink/dianpu.svg","店铺"]
      //             ,["~@/assets/img/detail_icon/qipao.svg","~@/assets/img/detail_icon_pink/qipao.svg","客服"]
      //             ,["~@/assets/img/detail_icon/shoucang.svg","~@/assets/img/detail_icon_pink/shoucang.svg","收藏"]]
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
  mounted() {
  },
  updated(){},
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
      this.itemScrollTop.push(-(this.$refs.swiper.$el.offsetTop-44))
      this.itemScrollTop.push(-(this.$refs.rule.$el.offsetTop-44))
      this.itemScrollTop.push(-(this.$refs.comment.$el.offsetTop-44))
      this.itemScrollTop.push(-(this.$refs.recommend.$el.offsetTop-44))
      this.itemScrollTop.push(-(this.$refs.recommend.$el.offsetTop-44)*2)
    },

    selectShow(index){
        this.$refs.scroll.scrollTo(0,this.itemScrollTop[index])
      // if(index === 0){
      //   this.$refs.scroll.scrollTo(0,this.shopY)
      // }
      // else if(index === 1){
      //   this.$refs.scroll.scrollTo(0,this.ruleY)
      // }
      // else if(index === 2){
      //   this.$refs.scroll.scrollTo(0,this.commentY)
      // }
      // else{
      //   this.$refs.scroll.scrollTo(0,this.recommendY)
      // }
    },

    changeScroll(y){
      y=y-44
      for(let i=0;i< this.itemScrollTop.length-1;i++){
        if(y<=this.itemScrollTop[i] && y>this.itemScrollTop[i+1] && i!==this.$refs.navBar.count){
          console.log(i);
          this.$refs.navBar.count=i
        }
      }
      // if(y<=this.shopY && y>this.ruleY){
      //   this.$refs.navBar.count=0
      // }
      // else if(y<=this.ruleY && y>this.commentY){
      //   this.$refs.navBar.count=1
      // }
      // else if(y<=this.commentY && y>this.recommendY){
      //   this.$refs.navBar.count=2
      // }else if(y<=this.recommendY){
      //   this.$refs.navBar.count=3
      // }
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
.scroll{
  height: calc(100vh - 44px - 50px);
  overflow:hidden;
}
</style>