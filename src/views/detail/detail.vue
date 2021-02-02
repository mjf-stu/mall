<template>
  <div>
      <detail-nav-bar :NavBar_data="['商品','参数','评论','推荐']"/>
      <h1>详情页id={{}}</h1>
  </div>
</template>

<script>
import DetailNavBar from './childComps/detailNavBar.vue';

export default {
name:'Detail',
components:{
DetailNavBar,
},
mounted(){
}
}
</script>

<style>

</style>