<template>
  <tab-bar>
      <tab-bar-item path='/home' textColor='#88cbed'>
        <template v-slot:img-off>
          <img src="@/assets/img/tabbar-black/zhuye.svg"/>
        </template>
        <template v-slot:img-on>
          <img src="@/assets/img/tabbar-blue/zhuye.svg" />
        </template>
        <template v-slot:text>
          <span>主页</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/category' textColor='#88cbed'>
        <template v-slot:img-off>
          <img src="@/assets/img/tabbar-black/fenlei.svg" />
        </template>
        <template v-slot:img-on>
          <img src="@/assets/img/tabbar-blue/fenlei.svg" />
        </template>
        <template v-slot:text>
          <span>分类</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/shopcar' textColor='#88cbed'>
        <template v-slot:img-off>
          <img src="@/assets/img/tabbar-black/gouwuche.svg" />
        </template>
        <template v-slot:img-on>
          <img src="@/assets/img/tabbar-blue/gouwuche.svg" />
        </template>
        <template v-slot:text>
          <span>购物车</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/my' textColor='#88cbed'>
        <template v-slot:img-off>
          <img src="@/assets/img/tabbar-black/My.svg" />
        </template>
        <template v-slot:img-on>
          <img src="@/assets/img/tabbar-blue/My.svg" />
        </template>
        <template v-slot:text>
          <span>我</span>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar-item/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>

</style>