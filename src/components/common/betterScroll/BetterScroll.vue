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
  data(){
    return{
      bs:null,
    }
  },
  props:{
    probetype:{
      type:Number,
      default: 0
    }
  },
  mounted() {
    // console.log(this.$refs,document.querySelector('.wrapper'));
    // let dom_backTop
   setTimeout(() => {

     //触发回到顶部
    //  dom_backTop=document.querySelector(".back-top")
    //  dom_backTop.onclick=function(){
    //    console.log(1);
    //   //  bs.y=0
    //   bs.scrollTo(0,0)
    //    console.log(bs);
    //  }

     this.bs = new BS(this.$refs.wrapper, {
      click: true,
      pullUpLoad: true,
      probetype: this.probetype,
    });

     this.bs.on("pullingUp", ()=> {
      this.bs.finishPullUp();
    });

    this.bs.on("scroll", (position) =>{
      this.$emit('changeScroll',position.y)
    //实时更新top位置
    //  dom_backTop.style.top=-position.y+480+"px"
    //  if(position.y<=-505){
    //    dom_backTop.style.display="block"
    //  }
    //  else{
    //    dom_backTop.style.display="none"
    //  }
    });
   }, 1000); 
  },
  methods:{
    scrollTo(x,y,time=300){
      this.bs.scrollTo(x,y,time)
    }
  }
};
</script>

<style scoped>
</style>