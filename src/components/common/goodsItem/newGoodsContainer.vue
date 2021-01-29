<template>
    <div class="goodsContainer">
        <new-goods-item v-for="item of mallData" :key="item.image" :data="item"/>
    </div>
</template>

<script>
import newGoodsItem from './newGoodsItem.vue'
export default {
  components: { newGoodsItem },
    name: 'newGoodsContainer',
    props:{
        mallData:{
            type:Array
        }
    }
}
</script>

<style>
.goodsContainer{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>