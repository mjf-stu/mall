<template>
  <div class="goods-item">
    <img :src="data.image" @load="imgLoad">
    <div>{{data.desc}}</div>
    <span>{{data.price}}</span>
  </div>
</template>

<script>
export default {
  name: "newGoodsItem",
  props: {
    data: {
      type: Object,
    },
  },
  methods:{
    imgLoad(){
      if(this.timer.timer) clearTimeout(this.timer.timer)
         this.timer.timer = setTimeout(() => {
            // console.log(this.timer);
          this.$bus.$emit("imgLoad")
          }, 500);
      }
    }
};
</script>

<style>
.goods-item {
  /* flex: 1 1 auto; */
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 10px;
}
.goods-item div {
  width: 100%;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>