<template>
  <div class="container">
    <nav-bar class="bcolor">
      <template v-slot:title>
        <span>购物车({{count}})</span>
      </template>
    </nav-bar>
    <better-scroll class="scroll"
    ref="scroll">
    <main-msg/>
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from '../../components/common/betterScroll/BetterScroll.vue';
import NavBar from "../../components/common/navbar/NavBar.vue";
import MainMsg from './childComps/mainMsg.vue';
export default {
  name: "shopCar",
  components: { 
    NavBar,
    MainMsg,
    BetterScroll,
  },
  computed:{
    count(){
      return this.$store.state.shopCarModule.shopCar.length
    }
  },
  activated(){
    console.log(1);
    this.$refs.scroll.scrollRefresh()
  }
};
</script>

<style scoped>
.container{
  height: 100vh;
}
.bcolor {
  background-color: #88cbed;
}
.scroll{
  height: calc(100% - 44px - 50px);
  overflow: hidden;
}
</style>