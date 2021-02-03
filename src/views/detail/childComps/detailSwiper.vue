<template>
  <el-carousel trigger="click" height="360px" :autoplay="false" arrow="always">
      <el-carousel-item v-for="(item,index) in images" :key="index">
          <img :src="item" width="100%" @load="imgload">
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: "DetailSwiper",
    props:{
        images:{
            type:Array
        }
    },
    methods:{
        imgload(){
            if(this.timer.timer) clearTimeout(this.timer.timer)
            this.timer.timer = setTimeout(() => {
                this.$emit("imgload")
            }, 500);
        }
    }
}
</script>

<style scoped>
</style>