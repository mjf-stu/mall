<template>
  <div v-if="itemInfo">
    <detail-main class="detail-main">
      <template v-slot:desc>
        <div>{{ itemInfo.desc }}</div>
      </template>
      <template v-slot:price>
        <div class="priceContainer">
          <span class="price">{{
            itemInfo.curreny + "" + itemInfo.price
          }}</span>
          <span class="oldprice">{{
            itemInfo.curreny + "" + itemInfo.oldprice
          }}</span>
          <span
            :style="{
              backgroundColor: itemInfo.priceTags.bgColor,
              color: itemInfo.priceTags.textColor,
            }"
          >{{ itemInfo.priceTags.text }}</span>
        </div>
      </template>
      <template v-slot:other>
        <div class="otherContainer">
          <span>销量{{ itemInfo.sell }}</span>
          <span>收藏{{ itemInfo.collect }}</span>
          <span>72小时发货</span>
        </div>
      </template>
      <template v-slot:tips>
        <div class="tipsContainer">
          <span><img :src="itemInfo.icon" />退货补运费</span>
          <span><img :src="itemInfo.icon" />全国包邮</span>
          <span><img :src="itemInfo.icon" />7天无理由退货</span>
        </div>
      </template>
    </detail-main>
  </div>
</template>

<script>
import DetailMain from "../../../components/content/detailMain/DetailMain.vue";
export default {
  components: { DetailMain },
  props: {
    itemInfo: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.detail-main{
   border-bottom: 12px solid #eaeaea;
}
.priceContainer {
  padding: 10px 0px;
}
.priceContainer > span{
  margin-right: 10px;
}
.priceContainer > span:last-child{
  padding: 2px 4px;
  border: 1px solid #e2e2e2;
  border-radius: 25px;
  font-size: 14px;
}
.price {
  font-size: 30px;
  color: #fc6d80;
}
.oldprice {
  font-size: 14px;
  text-decoration-line: line-through;
  color: #b8b8b8;
}
.otherContainer {
  padding: 25px 0px;
}
.otherContainer,
.tipsContainer {
  font-size: 14px;
  display: flex;
  /* justify-content: space-between; */
}
.otherContainer span,
.tipsContainer span {
  flex: 1 1 auto;
}
.tipsContainer img {
  width: 10%;
}
</style>