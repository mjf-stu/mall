<template>
    <div class="addShop" v-if="imgInfo!==null">
        <div class="shop-msg">
            <img :src="imgInfo[0]">
            <div class="price">{{msgInfo.curreny + msgInfo.price}}</div>
        </div>
        <div class="quantity">
            <div>数量</div>
            <div class="count">
                <span class="decrease" :class="{fontColor:quantity>1}" @click="decrease">-</span>
                <span>{{quantity}}</span>
                <span class="fontColor" @click="increase">+</span>
            </div>
        </div>
        <div class="submit" @click="submitShop">
            确定
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            quantity:1
        }
    },
    props:{
        msgInfo:{
            type:Object
        },
        imgInfo:{
            type:Array,
            default(){
                return null
            }
        }
    },
    methods:{
        decrease(){
            if(this.quantity > 1){
                this.quantity--
            }
        },
        increase(){
            this.quantity++
        },
        submitShop(){
            let msg = {
                d_id: this.msgInfo.d_id,
                img: this.imgInfo[0],
                price: this.msgInfo.price,
                quantity: this.quantity
            }
            this.$emit("submitShop",msg)
        }
    }
}
</script>

<style scoped>
.addShop{
    width: 100%;
    background-color: #FFFFFF;
    position: fixed;
    z-index: 1002;
    bottom: 0px;
    /* display: none; */
}
.shop-msg{
    padding: 10px;
    display: flex;
}
.shop-msg img{
    width: 80px;
}
.price{
    flex: 1 1 auto;
    padding: 10px 0 0 10px;
    font-size: 25px;
}
.quantity{
    padding: 10px 10px;
}
.count{
    border: 1px solid #979797;
    border-radius: 2px;
    width: 50px;
    display: flex;
    text-align: center;
    margin-top: 5px;
}
.count span{
    flex: 1;
}
.count span:not(:last-child){
    border-right: 1px solid #979779;
}
.fontColor{
    color: #ff5180;
}
.submit{
    height: 50px;
    line-height: 50px;
    background-color: #ff5180;
    color: #ffe6e8;
    text-align: center;
}
</style>