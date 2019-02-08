<template>
  <div>
    <div class="nav-container">
      <div class="menu" :class="{ hidden: !menuOpen }">Menu</div>
      <div class="hamburger" @click="openMenu" v-if="!menuOpen">...</div>
      <div class="hamburger" @click="closeMenu" v-else>X</div>
    </div>
    <div class="nav-menu" v-if="menuOpen">
      <div class="nav-menu-list">
        <div @click="goTo(routes.teams)" class="nav-menu-item">Teams</div>
        <div @click="goTo(routes.scoreboard)" class="nav-menu-item">Scoreboard</div>
        <div @click="goTo(routes.challenges)" class="nav-menu-item">Challenges</div>
        <div class="nav-menu-item disabled">Begginers</div>
        <div @click="goTo(routes.readme)" class="nav-menu-item">README.md</div>
        <div @click="goTo(routes.join)" class="nav-menu-item">Join</div>
      </div>
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
    },
    goTo(key: string) {
      this.$router.push(key)
      this.closeMenu()
    },
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
  margin: 0 20px;
}
.nav-menu {
  padding: 25px;
  height: 100vh;
  position: absolute;
  background-color: rgba(19, 21, 32, 0.98);
  left: 0;
  right: 0;
  z-index: 999;
}
.nav-menu-list {
  display: flex;
  flex-direction: column;
}
.nav-menu-item {
  padding: 20px;
  color: $lightBlue;
  box-sizing: border-box;
}
.nav-menu-item:hover {
  cursor: pointer;
  border-bottom: 1px solid $lightBlue;
  text-shadow: 0 0 3ex #fff;
  color: white;
  box-shadow: rgba(68, 129, 231, 0.25) 0px 6px 5px -4px;
}
</style>
