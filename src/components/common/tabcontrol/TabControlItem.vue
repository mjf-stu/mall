<template>
  <div class="tab-control-item" @click="tiaozhuan">
    <span :class="{ isActiveClass: isActive }">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "TabControlItem",
  props: {
    path: {
      type: String,
    },
    popular: {
      type: Object,
    },
    news: {
      type: Object,
    },
    tuijian: {
      type: Object,
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.path ? true : false;
    },
  },
  methods: {
    tiaozhuan() {
      if(this.path==='/home/popular'){
        
        this.$router.push({path:this.path,query:this.popular}).catch((error) => {});
      }
      else if(this.path==='/home/new'){
        this.$router.push({path:this.path,query:this.news}).catch((error) => {});
      }
      else{
        this.$router.push({path:this.path,query:this.tuijian}).catch((error) => {});
      }
    },
  },
};
</script>

<style>
.tab-control-item {
  flex: 1 1 auto;
}
span {
  padding: 0 4px 2px 4px;
}
.isActiveClass {
  color: #ff1493;
  border-bottom: 3px solid #ff1493;
}
</style>