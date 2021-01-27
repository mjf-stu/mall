<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabControl'
}
</script>

<style>
.container{
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    position: sticky;
    top: 44px;
    background-color: #FFFFFF;
}
</style>