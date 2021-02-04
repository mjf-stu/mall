<template>
    <div v-if="shopInfo">
    <detail-shop class="detail-shop">
        <template v-slot:logo>
            <img :src="shopInfo.shopMsg.shopLogo" class="logo">
        </template>
        <template v-slot:shopName>
            <div class="name">{{shopInfo.shopMsg.shopName}}</div>
        </template>
        <template v-slot:level>
            <img v-for="item of shopInfo.shopMsg.level" :key="item" :src="shopInfo.shopMsg.icon" class="icon">
            <span class="goods">在架商品{{shopInfo.shopMsg.cGoods}}</span>
        </template>
        <template v-slot:labels>
            <span v-for="item in shopInfo.shopLabel" :key="item.id" class="text">
                {{item.text}}
            </span>
        </template>
    </detail-shop>
    </div>
</template>

<script>
//公共组件
import DetailShop from "@/components/content/detailShop/DetailShop.vue"

export default {
name:"detailShopMsg",
components:{
    DetailShop,
},
props:{
    shopInfo:{
        type:Object
    }
}
}
</script>

<style>
.detail-shop{
  border-bottom: 12px solid #eaeaea;
}
.logo{
    width: 100%;
}
.name{
    font-size: 14px;
    color: #000000;
}
.icon{
    width: 10px;
    padding-right: 3px;
}
.goods{
    margin-left: 12px;
    padding-left: 15px;
    border-left: 1px solid #c2c2c2;
    font-size: 12px;
}
.text{
    color: #ff4466;
    font-size: 13px;
    border: 1px solid #dadada;
    border-radius: 25px;
    padding: 1px 2px;
    margin-right: 10px;
}
</style>