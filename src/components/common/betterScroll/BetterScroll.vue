<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import BS from 'better-scroll';
import BS from "@better-scroll/core";
import BS_pull from "@better-scroll/pull-up";
// import BS_load from "@better-scroll/observe-dom"
BS.use(BS_pull);
// BS.use(BS_load);
export default {
  name: "BetterScorll",
  data() {
    return {
      bs: null,
    };
  },
  props: {
    probetype: {
      type: Number,
      default: 0,
    },
    isupload: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    // console.log(this.$refs,document.querySelector('.wrapper'));
    // let dom_backTop
    // setTimeout(() => {
    this.bs = new BS(this.$refs.wrapper, {
      click: true,
      pullUpLoad: this.isupload,
      probetype: this.probetype,
      // observeDOM: true
    });
    if(this.isupload===true){
      this.bs.on("pullingUp", () => {
        this.$emit("pullingUpload", this.bs);
      });
    }
    if(this.probetype!==0){
      this.bs.on("scroll", (position) => {
        this.$emit("changeScroll", position.y);
      });
    }
    // }, 1000);
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.bs.scrollTo(x, y, time);
    },
    scrollRefresh() {
      console.log(1);
      if (this.bs !== null) {
        this.bs.refresh();
      }
    },
  },
};
</script>

<style scoped>
</style>