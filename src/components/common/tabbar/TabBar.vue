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
}
</style>