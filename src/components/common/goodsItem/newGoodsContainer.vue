<template>
    <div class="goodsContainer">
        <new-goods-item v-for="item of mallData" :key="item.desc" :data="item"/>
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

<style scoped>
.goodsContainer{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>