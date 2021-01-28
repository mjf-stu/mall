<template>
  <div id="childPopular">
      <goods-item v-for="(item ,index) of $route.query.goodslist" :key="item.id">
          <template v-slot:img>
            <img :src="$route.query.goodslist[index].image">
          </template>

          <template v-slot:desc>
            <div>{{$route.query.goodslist[index].desc}}</div>
          </template>

          <template v-slot:price>
            <div>￥{{$route.query.goodslist[index].price}}</div>
          </template>
      </goods-item>
      
  </div>
</template>

<script>
import goodsItem from '@/components/common/goodsItem/goodsItem.vue'
export default {
    name:'Popular',
    components:{
      goodsItem
    }
}
</script>

<style>
#childPopular{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

</style>