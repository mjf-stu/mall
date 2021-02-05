<template>
  <div class="popular">
    <h2>本周流行</h2>
    <div class="goodsList">
      <div v-for="item in recommendData" :key="item.sort">
          <img :src="item.image">
          <div>{{item.title}}</div>
      </div>
      <div v-for="item in recommendData" :key="item.image">
          <img :src="item.image">
          <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularView",
  props: {
    recommendData: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.popular{
    text-align: center;
    font-size: 12px;
}
h2{
    padding: 10px 0px;
}
.goodsList{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.goodsList > div{
    flex:1 1 auto
}
.goodsList > div >img{
    width: 80px;
}
</style>