<template>
  <div id="childPopular">
      <goods-container></goods-container>
  </div>
</template>

<script>
import goodsContainer from '@/components/common/goodsItem/goodsContainer.vue'
export default {
    name:'Popular',
    components:{
      goodsContainer
    }
}
</script>

<style>
</style>