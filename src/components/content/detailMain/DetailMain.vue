<template>
    <div class="detail-main-container">
        <div class="desc">
            <slot name="desc"></slot>
        </div>
        <div class="price">
            <slot name="price"></slot>
        </div>
        <div class="other">
            <slot name="other"></slot>
        </div>
        <div class="tips">
            <slot name="tips"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.desc{
    color: #000000;
}
.detail-main-container{
    padding: 10px;
}

</style>