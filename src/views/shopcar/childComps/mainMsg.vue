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
  </div>
</template>

<script>
export default {
  methods: {
    changeItem(item, index) {
      item.isSelect = !item.isSelect;
      // console.log(this.$store.state.shopCarModule);
    },
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


</style>