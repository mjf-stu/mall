<template>
  <div>
    <nav-bar>
      <template v-slot:title>
        <span>我</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
export default {
  name: "my",
  components: { NavBar },
};
</script>

<style>
</style>