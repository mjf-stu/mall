<template>
  <tool-bar class="detail-tool-bar">
    <template v-slot:options>
      <div class="item-container" >
        <div class="item" >
          <img src="~@/assets/img/detail_icon/dianpu.svg"/>
          <!-- <img src="~@/assets/img/detail_icon_pink/dianpu.svg"/> -->
          <div>店铺</div>
        </div>
        <div class="item fontColor">
          <!-- <img src="~@/assets/img/detail_icon/qipao.svg" /> -->
          <img src="~@/assets/img/detail_icon_pink/qipao.svg" />
          <div>客服</div>
        </div>
        <div class="item" >
          <img src="~@/assets/img/detail_icon/shoucang.svg"/>
          <!-- <img src="~@/assets/img/detail_icon_pink/shoucang.svg" /> -->
          <div>收藏</div>
        </div>
      </div>
    </template>
    <template v-slot:toCar><div class="car" @click="showItem(1)">加入购物车</div></template>
    <template v-slot:buy><div class="buy" @click="showItem(2)">立即购买</div></template>
  </tool-bar>
</template>

<script>
import ToolBar from "../../../components/content/ToolBar/ToolBar.vue";
export default {
  components: { ToolBar },
  data(){
    return{
    }
  },
  methods:{
    //事件监听
    showItem(index){
      this.$emit("showItem",index)
    }
  },
};
</script>

<style scoped>
.detail-tool-bar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  line-height: 50px;
}
.item-container {
  line-height: 25px;
  display: flex;
}
.item {
  flex: 1;
}
.item img {
  width: 30%;
  vertical-align: middle;
}
.car {
    width: 100%;
}
.buy {
    width: 100%;
}
.fontColor{
  color: #ff5180;
}
</style>