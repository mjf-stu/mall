<template>
    <div class="recommend-container">
        <div class="item" v-for="(item,index) of recommendInfo" :key="index">
            <img :src="item.image">
            <div>{{item.content}}</div>
            <div>{{item.current  +  item.price}}</div>
        </div>
    </div>
</template>

<script>
export default {
name:"detailRecommendMsg",
props:{
    recommendInfo:{
        type:Array
    }
}
}
</script>

<style scoped>
.recommend-container{
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.item {
    width: 30%;
    margin-bottom: 10px;
}
.item img{
    width: 100%;
}
.item div{
    font-size: 12px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>