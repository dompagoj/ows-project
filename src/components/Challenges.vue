<template>
  <div class="wrapper">
    <div v-for="category in categories" class="card" :key="category.title">
      <span class="title">{{ category.title }}</span>
      <div v-for="challenge in category.challenges" class="content" :key="challenge.name">
        <span>{{ challenge.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import categories from './challenges.ts'
export default Vue.extend({
  data() {
    return {
      categories,
    }
  }
})
</script>


<style scoped lang="scss">
@import "../variables.scss";
.wrapper {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
}
.card {
  margin: 0 15px 50px 15px;
  border: 1px solid $lightBlue;
  background: $darkBlue;
  height: 350px;
  box-shadow: rgba(68, 129, 231, 0.5) 0px 0px 15px 1px;

  .title {
    position: relative;
    display: inline-block;
    color: $green;
    font-size: 16px;
    text-shadow: 0 0 1ex $green;
    top: -30px;
    left: 50%; 
    transform: translate(-50%, 0)
  }

  .content {
    display: flex;
    flex-direction: column;

    span {
      padding: 15px;
    }
  }
}
</style>
