<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import BS from 'better-scroll';
import BS from "@better-scroll/core";
import BS_pull from "@better-scroll/pull-up";
BS.use(BS_pull);
export default {
  name: "BetterScorll",
  mounted() {
    // console.log(this.$refs,document.querySelector('.wrapper'));
    let bs
   setTimeout(() => {
     bs = new BS(this.$refs.wrapper, {
      click: true,
      pullUpLoad: true,
      probetype: 3,
    });
     bs.on("pullingUp", function () {
      bs.finishPullUp();
    });
    bs.on("scroll", function (position) {
      // if (position.y <= -505) {
      //     document.querySelector('.TabControlContainer').style.position="fixed"
      //     document.querySelector('.TabControlContainer').style.top=44+"px"
      //     document.querySelector('.TabControlContainer').style.left=0
      //     document.querySelector('.TabControlContainer').style.right=0
          
      // }
    });
   }, 2000); 
   

    
  },
};
</script>

<style scoped>
</style>