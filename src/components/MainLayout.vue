<template>
  <div class="border">
    <div class="main-container">
      <navbar/>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './Navbar.vue'
export default Vue.extend({
  components: {
    Navbar,
  }
})
</script>

<style lang="scss" scoped>
.main-container {
  min-width: 900px;
  background-image: url("../assets/background-main.jpg");
}
</style>
