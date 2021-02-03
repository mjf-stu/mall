<template>
  <div v-if="detailInfo">
    <detail-Msg>
      <template v-slot:desc> {{ detailInfo.desc }} </template>
      <template v-slot:img>
          <img v-for="(item,index) of detailInfo.images" :key="index" :src="item" width="100%" @load="imgload">
      </template>
    </detail-Msg>
  </div>
</template>

<script>
import DetailMsg from "@/components/content/detailMsg/DetailMsg.vue";
export default {
  name: "detailInfo",
  components: {
    DetailMsg,
  },
  props: {
    detailInfo: {
      type: Object,
    },
  },
  methods:{
      imgload(){
          if(this.timer.timer) clearTimeout(this.timer.timer)

          this.timer.timer = setTimeout(() => {
              this.$emit("imgload")
          }, 500);
      }
  }
};
</script>

<style scoped>
</style>