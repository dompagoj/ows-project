<template>
  <div class="wrapper">
    <div v-for="category in categories" :key="category.title">
      <span class="title">{{ category.title }}</span>
      <div class="card">
        <div v-for="challenge in category.challenges" class="content" :key="challenge.name">
          <div @click="openModal(challenge)" class="content-row">
            <span>{{ challenge.name }}</span>
            <span>{{ challenge.points }}</span>
          </div>
        </div>
      </div>
    </div>
    <modal :open="modalOpen" @close="modalOpen = false" :challenge="selected"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Modal from "./Modal.vue";
// @ts-ignore
import categories from "./challenges.ts";
export default Vue.extend({
  components: {
    Modal
  },
  data() {
    return {
      categories,
      modalOpen: false,
      selected: {}
    };
  },
  methods: {
    openModal(challenge) {
      this.selected = challenge;
      this.modalOpen = true;
    }
  }
});
</script>


<style scoped lang="scss">
@import "../variables.scss";
.wrapper {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
}
.title {
  position: relative;
  display: inline-block;
  color: $green;
  font-size: 16px;
  text-shadow: 0 0 1ex $green;
  top: -30px;
  left: 50%;
  transform: translate(-50%, 0);
}
.card {
  margin: 0 15px 50px 15px;
  border: 1px solid $lightBlue;
  background: $darkBlue;
  box-shadow: rgba(68, 129, 231, 0.5) 0px 0px 15px 3px;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid $lightBlue;
    height: 75px;

    span {
      padding: 15px;
    }
    .content-row {
      display: flex;
      justify-content: space-between;
    }
  }
  .content:hover {
    cursor: pointer;
    background-color: rgba($lightBlue, 0.2);
  }
}

@media (max-width: 1120px) {
  .wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 773px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
