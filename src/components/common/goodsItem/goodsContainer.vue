<template>
  <div class="goodsContainer">
    <goods-item v-for="(item) of $route.query.goodslist" :key="item.id">
      <template v-slot:img>
        <img :src="item.image" />
      </template>

      <template v-slot:desc>
        <div>{{ item.desc }}</div>
      </template>

      <template v-slot:price>
        <div>￥{{ item.price }}</div>
      </template>
    </goods-item>
  </div>
</template>

<script>
import goodsItem from "./goodsItem.vue";
export default {
  name: "goodsContainer",
  components: {
    goodsItem,
  },
};
</script>

<style scoped>
.goodsContainer{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>