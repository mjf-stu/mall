<template>
  <div>
    <nav-bar>
      <template v-slot:title>
        <span>分类</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
export default {
    name: 'category',
    components:{
        NavBar
    }
}
</script>

<style>
</style>