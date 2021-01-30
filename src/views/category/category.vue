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
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'

import BS from '@better-scroll/core'
import BS_pull from '@better-scroll/pull-up'
BS.use(BS_pull)
export default {
    name: 'category',
    components:{
        NavBar
    },
    mounted(){
      let bs=new BS('.wrapper',{
        probeType: 2,
        click:true,
        pullUpLoad:true
      })

      bs.on('scroll',function(position){
        // console.log(position.y);
      })

      bs.on('pullingUp',()=>{
        console.log(1);
        bs.finishPullUp()
      })
    }
}
</script>

<style scoped>
.wrapper{
  background-color: yellow;
  height: 200;
  overflow:hidden;
  /* overflow-y: scroll; */
}
.content{
  background-color: royalblue;
}
</style>