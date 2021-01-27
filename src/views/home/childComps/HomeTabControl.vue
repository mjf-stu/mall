<template>
    <tab-control>
        <tab-control-item path="/home/popular">
            <template v-slot>
                流行
            </template>
        </tab-control-item>
        <tab-control-item path="/home/new">
            <template v-slot>
                新款
            </template>
        </tab-control-item>
        <tab-control-item path="/home/tuiJian">
            <template v-slot>
                精选
            </template>
        </tab-control-item>
    </tab-control>
</template>

<script>
import TabControl from '../../../components/common/tabcontrol/TabControl.vue'
import TabControlItem from '../../../components/common/tabcontrol/TabControlItem.vue'
export default {
  components: { TabControl, TabControlItem },

}
</script>

<style>
</style>