<template>
  <div class='navbar'>
      <div class='left'><slot name="comeback"></slot></div>
      <div class='center'><slot name="title"></slot></div>
      <div class='right'><slot name="shopcar"></slot></div>
  </div>
</template>

<script>
export default {
    name: 'NabBar'
}
</script>

<style>
.navbar{
    height: 44px;
    line-height: 44px;
    text-align: center;
    display: flex;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 1000;
}
.left,.right{
    width: 60px;
    border: black 1px solid;
    flex: 0 0 auto;
}
.center{
    flex: 1 1 auto;
}
</style>