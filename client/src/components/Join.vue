<template>
  <div class="wrapper">
    <div class="box">
      <div class="header">Sign in</div>
      <div class="box-content">
        <div class="field">
          <label class="field-title">Team secret key</label>
          <input type="text" class="input">
        </div>
          <button class="button">Join a team</button>
      </div>
    </div>
    <div class="text-wrapper">
      <p @click="goToCreate">Or <span>[ create a new team ]</span></p>
      <p>Or <span>[ buy a ticket to watch ]</span></p>
    </div>
  </div>
</template> 

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'join',
  methods: {
    goToCreate() {
      this.$router.push('/create-team')
    },
  }
})
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.wrapper {
  width: 100vh;
  margin: 0 auto;
}

.box {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  border: 2px solid $lightBlue;
  box-shadow: rgba(68, 129, 231, 0.5) 0px 0px 15px 3px;
  background: $darkBlue;
}

.header {
  width: 100%;
  padding-left: 25px;
}

.field {
  margin-bottom: 25px;
}

.box-content {
  padding: 0 50px 25px 50px;
}

.field-title {
  padding-top: 10px;
  color: $lightBlue;
}


.text-wrapper {
  margin: 25px;
  display: flex;
  justify-content: center;

  p {
    padding: 0 10px;

    span {
      color: #84ff8c;
    }
    span:hover {
      cursor: pointer;
    }
  }
}

@media (max-width: 1265px) {
  .wrapper {
    width: 90%;
  }
}

</style>
