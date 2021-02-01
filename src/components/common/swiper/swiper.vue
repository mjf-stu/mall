<template>
  <div class="swiper">
  <el-carousel :interval="4000" arrow="default">
    <el-carousel-item v-for="item of swiperData" :key="item.image">
      <img :src="item.image" />
    </el-carousel-item>
  </el-carousel>
  </div>
</template>


<script>
export default {
  name: "swiper",
  props: {
    swiperData: {
      type: Array,
    },
  },
  data(){
    return{
      isLoad:false
    }
  },
  methods:{
    
  }
};
</script>

<style>
.swiper{
  /* padding-top: 44px; */
}
.el-carousel__container {
  height: 195px;
}
.el-carousel__item {
  /* color: #475669; */
  /* font-size: 18px; */
  opacity: 0.75;
  /* line-height: 300px; */
  margin: 0;
}
.el-carousel__item img {
  width: 100%;
}
</style>
