<template>
  <nav-bar>
    <template v-slot:comeback>
    <div class="imgContainer" @click="comeback">
      <img src="@/assets/img/fanhui/fanhui.svg">
    </div>    
    </template>
    <template v-slot:title>
        <div class="layout">
          <span 
          v-for="(item,index) of NavBar_data" 
          :key="index"
          :class="{ShowItem:index===count}"
          @click="selectShow(index)">
              {{item}}
          </span>
        </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  data(){
      return{
        count:0
      }
  },
  props:{
      NavBar_data:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
      //事件监听
      comeback(){
          this.$router.go(-1);
      },

      selectShow(index){
          this.count = index
      }

  }
};
</script>

<style scoped>
.imgContainer{
    height: 100%;
}
img{
    height: 50%;
    margin-top: 11px;
}
.layout {
    display: flex;
}
.layout > span{
    flex:1 1 auto;
}
.ShowItem{
    color: #88cbed;
}
</style>