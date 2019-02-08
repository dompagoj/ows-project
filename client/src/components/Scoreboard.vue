<template>
<div class="wrapper">
  <div class="container box">
    <span class="content">Scoreboard will be available when the event ends!</span>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "../variables.scss";

.container {
  display: flex;
  width: 80vh;
  margin: 0 auto;
}

.content {
  text-align: center;
}

.box {
  margin-top: 75px;
  border: 2px solid $lightBlue;
  box-shadow: rgba(68, 129, 231, 0.5) 0px 0px 15px 3px;
  background: $darkBlue;
}

</style>
