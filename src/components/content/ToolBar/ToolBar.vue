<template>
  <div class="contain">
    <div class="left">
      <div class="options"><slot name="options"></slot></div>
    </div>
    <div class="right">
      <div class="toCar"><slot name="toCar"></slot></div>
      <div class="buy"><slot name="buy"></slot></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contain {
  display: flex;
  text-align: center;
}
.left {
  width: 50%;
  background-color: #FFFFFF;
}
.right {
  width: 50%;
  display: flex;
}
.toCar {
  width: 50%;
  color: #ff5180;
  background-color: #ffe6e8;
}
.buy {
  width: 50%;
  background-color: #ff5180;
  color: #ffe6e8;
}
</style>