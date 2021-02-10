<template>
    <div class="toast">
        {{msg}}！！！！
    </div>
</template>

<script>
export default {
    props:{
        msg:{
            type:String,
            default:"成功"
        }
    }
}
</script>

<style scoped>
.toast{
    padding: 5px 10px;
    border-radius: 15px;
    background-color: #00000048;
    color: #FFFFFF;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1003;
}
</style>