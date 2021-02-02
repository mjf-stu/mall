<template>
  <div>
    <detail-nav-bar :NavBar_data="['商品', '参数', '评论', '推荐']" />
    <detail-swiper :images="topImages"/>
    <detail-main-msg :itemInfo="itemInfo"/>
  </div>
</template>

<script>
//公共组件

//子组件
import DetailNavBar from "./childComps/detailNavBar.vue";
import DetailSwiper from './childComps/detailSwiper.vue';
import DetailMainMsg from './childComps/detailMainMsg.vue';

//网络请求
import { getMainData, getRuleData } from "@/network/details.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailMainMsg,
  },
  data() {
    return {
      d_id: null,
      mainData: null,
      topImages: null,
      ruleData: null,
      itemInfo:{
        desc:"",
        price:0,
        oldprice:0,
        priceTags:{
          text:"",
          bgColor:"",
          textColor:"",
        },
        sell:0,
        collect:0,
        icon:"",
        curreny:""
      }
    };
  },
  //生命周期函数
  created() {
    this.d_id = this.$route.params.d_id;
    this.getMainData(this.d_id);
    this.getRuleData(this.d_id);
  },
  mounted() {},
  //自定义函数
  methods: {
    //网络请求
    getMainData(d_id) {
      getMainData(d_id).then((res) => {
        console.log(res);
        this.mainData = res;
        this.topImages = res.topImages;
        this.itemInfo.desc = res.desc
        this.itemInfo.price = res.price
        this.itemInfo.oldprice = res.oldprice
        this.itemInfo.priceTags.text = res.priceTags
        this.itemInfo.priceTags.textColor = res.textColor
        this.itemInfo.priceTags.bgColor = res.bgColor
        this.itemInfo.sell = res.sell
        this.itemInfo.collect = res.collect
        this.itemInfo.icon = res.icon
        this.itemInfo.curreny = res.curreny
      });
    },
    getRuleData(d_id) {
      getRuleData(d_id).then((res) => {
        console.log(res);
        this.ruleData = res;
      });
    },
    //事件监听
  },
};
</script>

<style scoped>

</style>