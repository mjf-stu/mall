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

<style scoped>
.navbar{
    height: 44px;
    line-height: 44px;
    text-align: center;
    display: flex;
}
.left,.right{
    /* line-height: 55px; */
    width: 60px;
    /* border: black 1px solid; */
    /* flex: 0 0 auto; */
    
}
.center{
    flex: 1 1 auto;
}
</style>