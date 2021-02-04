<template>
    <div class="detail-rule">
        <table>
            <slot name="size"></slot>
        </table>
        <table>
            <slot name="other"></slot>
        </table>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .detail-rule{
        padding: 10px;
    }
    table{
        width: 100%;
    }
    table tr{
        height: 45px;
        /* line-height: 45px; */
        border-bottom: 1px #e4e4e4 solid;
    }
    table tr td{
    }
    table tr td:first-child{
        width: 74px;
    }
    table tr:not(:nth-child(1)) td:not(:nth-child(1)){
        color:#eb4868
    }
    table:nth-child(2) tr td:not(:nth-child(1)){
        color:#eb4868
    }
</style>