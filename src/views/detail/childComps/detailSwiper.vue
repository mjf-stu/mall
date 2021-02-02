<template>
  <el-carousel trigger="click" height="360px" :autoplay="false" arrow="always">
      <el-carousel-item v-for="(item,index) in images" :key="index">
          <img :src="item" width="100%">
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
    }
}
</script>

<style scoped>
</style>