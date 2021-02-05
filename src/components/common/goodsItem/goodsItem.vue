<template>
  <div class="goods-item">
    <slot name="img"></slot>
    <slot name="desc"></slot>
    <slot name="price"></slot>
  </div>
</template>

<script>
export default {
  name: "goodsItem",
};
</script>

<style scoped>
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