<template>
  <div class="wrapper">
    <div class="table-header">
      <h2>TEAMS</h2>
      <div class="separator"/>
      <h3>Ranking</h3>
    </div>
    <div class="table-column-names">
      <h4 class="place">PLACE</h4>
      <h4>NAME</h4>
      <h4 class="score">SCORE</h4>
    </div>
    <div class="table-column-content" v-for="(team, i) in teams" :key="i">
      <div class="place">{{team.place}}</div>
      <div>{{team.name}}</div>
      <div class="score">{{team.ranking}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { teams } from "../data/teams";
export default Vue.extend({
  data() {
    return {
      teams
    };
  }
});
</script>

<style scoped lang="scss">
@import "../variables.scss";

.table-header {
  display: grid;
  grid-template-columns: 15% auto 15%;
  grid-gap: 5px;
  align-items: center;

  h2 {
    text-align: center;
    color: $lightBlue;
    font-size: 25px;
    text-shadow: 0 0 1ex $lightBlue;
  }
  h3 {
    text-align: center;
    font-size: 16px;
    transform: scale(1, 1.5);
  }
}
.separator {
  border-bottom: 3px dashed $lightBlue;
  flex: 1;
  height: 0;
}
.table-column-names {
  color: $lightBlue;
  padding: 25px 50px 0px 25px;
  display: grid;
  grid-template-columns: 15% 15% auto;
  font-size: 16px;

  .score {
    justify-self: end;
  }
  .place {
    justify-self: center;
  }
}
.table-column-content {
  padding: 25px 50px 0px 25px;
  display: grid;
  grid-template-columns: 15% 15% auto;

  .score {
    justify-self: end;
  }
  .place {
    justify-self: center;
  }
}
.table-column-content:hover {
  cursor: default;
  color: $green;
}
@media (max-width: 990px) {
  .table-header {
    grid-template-columns: 30% auto 30%;
  }
  .table-column-names {
    grid-template-columns: 30% auto 30%;
  }
  .table-column-content {
    grid-template-columns: 30% auto 30%;
  }
}
</style>
