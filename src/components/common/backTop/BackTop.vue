<template>
    <div class="back-top">
        back-top
    </div>
</template>

<script>
export default {
name:'backTop',
}
</script>

<style scoped>
.back-top{
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: yellow;
    /* display: block; */

    line-height: 80px;
    text-align: center;

    position:fixed;
    right: 5px;
    bottom: 70px; 

    z-index: 1000;
}
</style>