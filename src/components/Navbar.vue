<template>
  <div class="nav-container">
    <div
      @click="goTo(routes.teams)"
      class="nav-item"
      v-bind:class="{ active: isActive(routes.teams) }"
    >Teams</div>
    <div
      @click="goTo(routes.scoreboard)"
      class="nav-item"
      v-bind:class="{ active: isActive(routes.scoreboard) }"
    >Scoreboard</div>
    <div
      @click="goTo(routes.challenges)"
      class="nav-item"
      v-bind:class="{ active: isActive(routes.challenges) }"
    >Challenges</div>
    <div>
      <img class="logo" src="../assets/logo.png">
    </div>
    <div
      @click="goTo(routes.begginer)"
      class="nav-item"
      v-bind:class="{ active: isActive(routes.begginer) }"
    >Begginers</div>
    <div
      @click="goTo(routes.readme)"
      class="nav-item"
      v-bind:class="{ active: isActive(routes.readme) }"
    >README.md</div>
    <div
      @click="goTo(routes.join)"
      class="nav-item login-link"
      v-bind:class="{ active: isActive(routes.join) }"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { routes } from '@/router'
export default Vue.extend({
  name: 'navbar',
  created() {
    this.activeKey = this.$router.currentRoute.path
  },
  data() {
    return {
      activeKey: '',
    }
  },
  methods: {
    goTo(key: string) {
      this.activeKey = key
      this.$router.push(key)
    },
    isActive(key) {
      return this.activeKey === key
    },
  }
})
</script>

<style scoped lang="scss">
@import "../variables.scss";

.nav-container {
  letter-spacing: 0px;
  display: flex;
  flex-shrink: 1;
  justify-content: space-evenly;
  align-items: center;
  margin: $defaultMargin;

  div {
    /* flex: 0 0 auto; */
    padding-bottom: 5px;
  }

  div::before {
    box-shadow: 0 0 60px 30px rgba(255, 255, 255, 0);
  }
}

.nav-item {
  border-radius: 50%;
  /* box-shadow: 0 0 60px 30px rgba(255, 255, 255, 0.2); */
}

.nav-item:hover {
  cursor: pointer;
  border-bottom: 2px solid #4481e7;
}

.active {
  border-bottom: 2px solid #4481e7;
}

.logo {
  width: 150px;
  height: 75px;
}
.login-link::before {
  content: "Join a Team";
  display: block;
}
</style>
