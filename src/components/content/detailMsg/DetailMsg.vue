<template>
  <div class="info">
    <div class="desc">
      <div class="point p1"></div>
      <div class="line l1"></div>
      <slot name="desc"></slot>
      <div class="point p2"></div>
      <div class="line l2"></div>
    </div>
    <div class="img">
        <slot name="img"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.info {
  padding: 10px;
  width: calc(100% - 20px);
}
.desc {
  padding: 10px;
  position: relative;
  margin: 0px auto;
}
.point {
  width: 6px;
  height: 6px;
  background-color: #000;
  border-radius: 3px;
}
.p1 {
  position: absolute;
  left: -3px;
  top: -3px;
  z-index: 1;
}
.p2 {
  position: absolute;
  left: calc(100% - 3px);
  top: calc(100% - 3px);
  z-index: 1;
}
.line {
  width: 80px;
  height: 1px;
  background-color: #888;
}
.l1 {
  position: absolute;
  top: 0px;
  left: 0px;
}
.l2 {
  position: absolute;
  top: 100%;
  left: calc(100% - 80px);
}
.img{
    padding-top: 20px;
}
</style>