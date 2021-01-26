<template>
  <div>
    <nav-bar>
      <template v-slot:title>
        <span>购物车</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
export default {
  name: "shopCar",
  components: { NavBar },
};
</script>

<style>
</style>