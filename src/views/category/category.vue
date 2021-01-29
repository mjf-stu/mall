<template>
  <div>
    <nav-bar>
      <template v-slot:title>
        <span>分类</span>
      </template>
    </nav-bar>

    <div class="wrapper">
      <ul class="content">
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
        <li>index</li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'

import BS from '@better-scroll/core'

export default {
    name: 'category',
    components:{
        NavBar
    },
    mounted(){
      let bs=new BS('.wrapper')
    }
}
</script>

<style>
.wrapper{
  background-color: yellow;
  height: 200px;
  overflow:hidden;
  /* overflow-y: scroll; */
}
.content{
  background-color: royalblue;
}
</style>