<template>
  <transition v-if="show" name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div @click="$emit('close')" class="modal-header">
            <span class="title">{{challenge.name}}</span>
            <span class="points">{{challenge.points}}</span>
          </div>

          <div class="modal-body">
            <span>Challenge description / Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem iste veniam facere dicta earum aliquam debitis quod modi eaque repellat.</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas excepturi, quas veniam expedita nihil numquam, quisquam quibusdam exercitationem, itaque unde enim? Natus earum libero, ex voluptate corporis repellendus dolorem! Aliquam!</span>
          </div>

          <div class="modal-footer">
            <input class="input" placeholder="CTF{...}">
            <button class="button">Submit flag</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    open: Boolean,
    challenge: Object
  },
  data() {
    return {
      show: this.open
    };
  },
  watch: {
    open(val) {
      this.show = val;
    }
  }
};
</script>

<style lang="scss">
@import "../variables.scss";

.points {
  border: 1px solid $green;
  padding: 10px;
  border-radius: 15px;
  margin-left: 25px;
  color: $green;
}
.title {
  text-shadow: 0 0 10px white;
}
.button {
  width: 45% !important;
  padding: 0px 25px;
  box-sizing: border-box;
  margin: 5px 0;
  vertical-align: middle;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  font-size: 12px;
}

.modal-footer {
  padding: 0 25px;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.modal-container {
  width: 60vh;
  height: 70vh;
  margin: 0px auto;
  background-color: rgba($darkBlue, 0.9);
  border: 1px solid $lightBlue;
  border-radius: 2px;
  box-shadow: rgba(68, 129, 231, 0.5) 0px 0px 15px 5px;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.modal-header {
  padding: 15px 30px;
  font-size: 12px;
  margin: 2em 0;
  border-bottom: 3px dashed $lightBlue;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 !important;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
}

.modal-body {
  padding: 25px;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}
.modal-header::after {
  content: "\00d7";
  display: flex;
  flex: 1;
  justify-content: flex-end;
  font-size: 20px;
}
.close-button-container {
  display: flex;
  justify-content: flex-end;
}
.close-button {
  background-color: $darkBlue;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
