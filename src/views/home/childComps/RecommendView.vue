<template>
  <div class="recommend">
      <div v-for="item in recommendData" :key="item.sort">
          <img :src="item.image">
          <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: "HomeRecommend",
    props:{
        recommendData:{
            type:Array
        }
    }
}
</script>

<style>
.recommend{
    text-align: center;
    font-size: 12px;
    padding: 10px 0px 20px;
    border-bottom: 8px solid #eee;
    display: flex;
    justify-content: space-evenly;
}
.recommend>div{
    flex: 1 1 auto;
}
.recommend img{
    width: 75%;
    margin-bottom: 10px;
}
</style>