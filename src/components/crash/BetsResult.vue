<template>
  <div class="bets-result-area">
    <bet-result />
    <bet-result />
    <bet-result />
    <bet-result />
    <bet-result />
    <bet-result />
    <bet-result />
    <bet-result />
    <bet-result />
    <bet-result />
    <bet-result />
    <bet-result />
    <bet-result />
    <bet-result />
    <bet-result />
  </div>
</template>

<style lang="scss" scoped>
.bets-result-area {
  width: 250px;
  height: 300px;
  position: absolute;
  margin-top: 100px;
  overflow-y: scroll;
}

.bets-result-area::-webkit-scrollbar {
  width: 8px;
  background: #000000;
  border-radius: 119px;
  height: 100px;
}

.bets-result-area::-webkit-scrollbar-thumb {
  background-color: #272727;
  border-radius: 119px;
}
</style>

<script>
import BetResult from './BetResult.vue';

export default {
  components: {
    BetResult,
  },
};
</script>
