<template>
  <div class="border">
    <div class="main-container">
      <navbar v-if="$mq === 'full'"/>
      <mobile-navbar v-else/>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './Navbar.vue'
import MobileNavbar from './MobileNavbar.vue'
export default Vue.extend({
  components: {
    Navbar,
    MobileNavbar,
  }
})
</script>

<style lang="scss" scoped>
.main-container {
  min-width: 541px;
  background-image: url("../assets/background-main.jpg");
}
</style>
