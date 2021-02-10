<template>
  <div class="selectAll" @click="selectAll()">
    <div class="selectBtn">
      <img src="@/assets/img/shopcar/dui.svg" v-show="isSelectAll" />
    </div>
    全选
    <span>合计：{{ totalMoney }}</span>
    <div>去计算({{ totalQuantity }})</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  created() {
    // console.log(this.$store.state.shopCarModule);
  },
  computed:{
    ...mapGetters([
      'isSelectItem',
      'notSelectItem'
    ]),
    isSelectAll(){
      return this.notSelectItem.length === 0 && this.$store.state.shopCarModule.shopCar.length!== 0?true : false
    },
    totalQuantity(){
      return this.isSelectItem.length
    },
    totalMoney(){
      let all = 0
      if(this.isSelectItem.length===0){
        return 0
      }
      else{
        for(let item of this.isSelectItem){
          all += item.price * item.quantity
        }
        return all
      }
    }

  },
  methods: {
    selectAll(){
      if(this.notSelectItem.length === 0){
        console.log("已全选");
      }
      else{
        for(let item of this.notSelectItem){
          item.isSelect = true
        }
      }
    }
  },
};
</script>

<style scoped>
.selectAll {
  font-size: 14px;
  height: 30px;
  display: flex;
  line-height: 30px;
  background-color: #eaeaea;
  position: fixed;
  bottom: 50px;
  left: 0px;
  right: 0px;
}
.selectBtn {
  width: 20px;
  height: 20px;
  border: 1px solid #999999;
  border-radius: 11px;
  margin: auto 0px;
  line-height: 0px;
}
.selectAll img {
  height: 20px;
  vertical-align: bottom;
}
.selectAll span {
  margin-left: 20px;
  flex: 1;
}
.selectAll > div:last-child{
  background-color: #ff5100;
  color: #FFFFFF;
  text-align: center;
  padding: 0px 5px;
}
</style>