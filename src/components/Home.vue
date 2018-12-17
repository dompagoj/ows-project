<template>
  <div class="border">
    <div class="main-container">
      <div class="logo-container">
        <img @click="goToReadme" class="logo" src="../assets/logo.png" alt>
        <div class="text">[ Solve the ridle to enter ]</div>
        <div v-if="$mq === 'sm'" @click="sneakyClue" class="sneaky"/>
        <div v-if="displayFinal" class="finalRiddle">
          <p class="balloon from-right">There was a storage and it was local,
            <br>remeber the key is "riddle" and the value:
            <br>"What word is spelled wrong in every dictionary?"
          </p>
          <i class="octocat"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { routes } from '@/router'
import Vue from 'vue'
export default Vue.extend({
  name: 'home',
  created() {
    console.log('Hello, fellow developer!')
    // @ts-ignore
    window.letMeIn = () => {
      console.log('When the screen gets really small, things become clickable?')
    } 
  },
  data() {
    return {
      displayFinal: false,
    }
  },
  methods: {
    goToReadme() {
      // @ts-ignore
      this.$router.push(routes.readme)
    },
    sneakyClue() {
      this.displayFinal = true
    }
  }
})
</script>
  
<style lang="scss" scoped>
.logo {
  transform: scale(0.7, 0.7);
  transition: 0.3s;
}

.logo-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  animation: popIn 0.6s;

  .logo:hover {
    cursor: pointer;
    transform: scale(0.8, 0.8);
    transition: 0.3s;
  }
  .text {
    position: relative;
    top: -80px;
  }
  .sneaky {
    position: absolute;
    bottom: 75px;
    right: 150px;
    box-shadow: 0 0 60px 30px rgba(255, 255, 255, 0);
    animation: glow 2s infinite alternate-reverse;
    height: 0px;
    width: 0px;
  }
  .sneaky::before {
    content: "";
    position: relative;
    right: 50px;
    padding: 50px 100px;
  }

  .finalRiddle {
    position: absolute;
    color: black;
    display: flex;
    right: 25px;
    top: 15px;
    animation: popIn 1.5s;
  }
  .octocat::before {
    top: 100px;
    left: -45px;
  }

  @keyframes glow {
    from {
      box-shadow: 0 0 60px 30px rgba(255, 255, 255, 0);
    }
    to {
      box-shadow: 0 0 60px 30px rgba(255, 255, 255, 0.1);
    }
  }
}
</style>

