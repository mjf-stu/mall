<template>
  <div>
    <div
      class="shopItem"
      v-for="(item, index) of this.$store.state.shopCarModule.shopCar"
      :key="item.d_id"
    >
      <div class="selectImg" @click="changeItem(item, index)">
        <img src="@/assets/img/shopcar/dui.svg" v-show="item.isSelect" />
      </div>
      <img class="shopImg" :src="item.img" />
      <div class="shopMsg">
        <div>
          {{ item.desc }}
        </div>
        <div>
          <span>{{ item.price }}</span>
          <span>x{{ item.quantity }}</span>
        </div>
      </div>
    </div>

    <div class="selectAll" @click="selectAll()">
      <div class="selectBtn">
        <img src="@/assets/img/shopcar/dui.svg" v-show="isSelectAll" />
      </div>全选
      <span>合计：{{totalMoney}}</span>
      <div>去计算({{totalQuantity}})</div>      
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$store.state.shopCarModule);
  },
  computed:{
    isSelectItem(){
      let foo = this.$store.state.shopCarModule.shopCar.filter(item=>{
        return item.isSelect === true
      })
      return foo
    },
    notSelectItem(){
      let foo = this.$store.state.shopCarModule.shopCar.filter(item=>{
        return item.isSelect === false
      })
      return foo
    },
    isSelectAll(){
      return this.isSelectItem.length === this.$store.state.shopCarModule.shopCar.length?true : false
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
    changeItem(item, index) {
      item.isSelect = !item.isSelect;
      // console.log(this.$store.state.shopCarModule);
    },
    selectAll(){
      if(this.notSelectItem.length === 0){
        console.log(1);
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
.shopItem {
  height: 80px;
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #eaeaea;
}
.selectImg {
  margin-top: 30px;
  margin-right: 10px;
  height: 25%;
  width: 20px;
  border: 1px solid #999999;
  border-radius: 11px;
}
.selectImg img {
  height: 100%;
}
.shopImg {
  height: 100%;
}
.shopMsg {
  flex: 1;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row; */
  align-content: space-between;
}
.shopMsg > div:first-child {
  /* width: 270px; */
  /* white-space: nowrap; */
  /* text-overflow: -o-ellipsis-lastline; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.shopMsg > div:last-child {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

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