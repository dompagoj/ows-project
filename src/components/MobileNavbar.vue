<template>
  <div>
    <div class="nav-container">
      <div class="menu" :class="{ hidden: !menuOpen }">Menu</div>
      <div class="hamburger" @click="openMenu" v-if="!menuOpen">...</div>
      <div class="hamburger" @click="closeMenu" v-else>X</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    openMenu() {
      this.menuOpen = true;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../variables.scss";
.nav-container {
  letter-spacing: 0px;
  display: flex;
  justify-content: space-between;
  overflow-y: auto;
  align-items: center;
  margin: 5px 0;
  background: url("../assets/logo.png") no-repeat center;
  background-size: contain;

  div {
    padding: 25px;
  }
}

.hidden {
  visibility: hidden;
}

.logo {
  width: 150px;
  height: 75px;
}
.nav-item {
  width: 50%;
  display: flex;
  justify-content: center;
}
.hamburger {
  padding: 25px;
}
.hamburger:hover {
  cursor: pointer;
}
.menu {
  color: $lightBlue;
  font-size: 25px;
  text-shadow: 0 0 1ex $lightBlue;
}
</style>
