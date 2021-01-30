<template>
    <div class='tabbar'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style>
.tabbar {
  height: 50px;
  display: flex;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0px -1px 1px #c2c2c280;
  background-color: #FFFFFF;
  z-index: 1000;
}
</style>