import BackTop from "@/components/common/backTop/BackTop.vue";

export let backTop = {
    components:{
        BackTop
    },
    data(){
      return{
          BackTop_isShow: false,
      }
    },
    methods:{
        toBackTop() {
            this.$refs.scroll.scrollTo(0, 0);
          },
    }
}