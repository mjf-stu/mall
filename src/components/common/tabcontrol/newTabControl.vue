<template>
  <div class="TabControlContainer">
    <div class="item" 
    v-for="(item, index) in itemNames" 
    :key="index"
    @click="selectItem(index)">
      <span :class="{isActiveClass: count===index}">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewTabControl",
  props: {
    itemNames: {
      type: Array,
      default(){
        return []
      }
    },
  },
  data(){
      return{
          count:0
      }
  },
  methods:{
      selectItem(index){
          this.count=index
          this.$emit("changeItem",index)
      }
  }
};
</script>

<style scoped>
.TabControlContainer {
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: flex;
  /* position: sticky; */
  /* top: 44px; */
  background-color: #ffffff;
  /* z-index: 100; */
}
.item {
  flex: 1 1 auto;
}
.item span {
  padding: 0 4px 2px 4px;
}
.isActiveClass {
  color: #ff1493;
  border-bottom: 3px solid #ff1493;
}
</style>