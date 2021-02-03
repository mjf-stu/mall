<template>
  <div class="ShopContainer">
    <div class="logoContainer">
      <slot name="logo"></slot>
    </div>
    <div class="msgContainer">
      <div><slot name="shopName"></slot></div>
      <div><slot name="level"></slot><slot name="goods"></slot></div>
      <div><slot name="labels"></slot></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ShopContainer {
  padding: 10px;
  height: 60px;
  /* border: 1px red solid; */
  display: flex;
}
.logoContainer {
  width: 60px;
  height: 60px;
  float: left;
}
.msgContainer{
    flex: 1 1 auto;
    padding-left: 10px;
}
.msgContainer > div:not(:last-child){
    margin-bottom: 3px;
}
</style>