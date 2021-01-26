<template>
  <div class="tabbar-item" :style="is_Active_style" @click="selectItem">
    <slot name="img-on" v-if="is_Active"></slot>
    <slot name="img-off" v-else></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data: function () {
    return {};
  },
  props: {
    path: {
      type: String,
    },
    textColor: {
      type: String,
      default: "#88cbed",
    },
  },
  computed: {
    is_Active: function () {
      return this.$route.path === this.path ? true : false;
    },
    is_Active_style: function () {
      return this.is_Active ? { color: this.textColor } : {};
    },
  },
  methods: {
    selectItem() {
      this.$router.push(this.path).catch((error) => {});
    },
  },
};
</script>

<style>
.tabbar-item {
  flex: 1 1 auto;
  text-align: center;
  line-height: 27px;
}
.tabbar-item img {
  width: 25px;
  vertical-align: bottom;
}
.tabbar-item span {
  display: block;
}
.gaoliang {
  display: none;
}
</style>