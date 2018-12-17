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
      <p>Or <span>[ create a new team ]</span></p>
      <p>Or <span>[ buy a ticket to watch ]</span></p>
    </div>
  </div>
</template> 

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.box {
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  border: 2px solid $lightBlue;
  box-shadow: rgba(68, 129, 231, 0.5) 0px 0px 85px -1px;
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

.input {
  width: 100% !important;
  color: white;
  background: transparent;
  border: 2px solid $lightBlue;
  box-shadow: rgba(68, 129, 231, 0.5) 0px 0px 30px -1px;
}

.field-title {
  color: $lightBlue;
}
.button {
  width: 100%;
  color: white;
  height: 38px;
  border: 2px solid $lightBlue; 
  box-shadow: rgba(68, 129, 231, 0.5) 0px 0px 30px -1px;
  background: transparent;
}
.button:hover {
  cursor: pointer;
}
.button:active {
  border: 2px solid white;
  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 30px -1px;
}
.button:focus {
  outline: none;
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

</style>
