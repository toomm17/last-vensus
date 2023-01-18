<template>
  <app-header />

  <div class="content">
    <div class="game-area">
      <div class="game-container">
        <result-history />
        <bets-result />
        <crash-game />
        <crash-footer />
      </div>
    </div>
    <app-bet-area game="Crash" />
  </div>
  <game-history />
</template>

<style scoped lang="scss">
.content {
  width: 100%;
  display: flex;
  height: 780px;
  height: 83%;

  @media screen and (max-width: 1160px) {
    left: 320px;

    .active span {
      display: none;
    }
  }
  border-bottom: 4px solid #272727;
}

.game-area {
  width: 95%;
  background-color: #1b1b1b;
  border-right: 4px solid #272727;

  .crash-container {
    display: flex;
    width: 100%;
    margin-top: 100px;
  }
}
</style>

<script>
import AppBetArea from '@/components/betting-area/AppBetArea.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import ResultHistory from '@/components/crash/ResultHistory.vue';
import BetsResult from '@/components/crash/BetsResult.vue';
import CrashCoeff from '@/components/crash/CrashCoeff.vue';
import CrashGame from '@/components/crash/CrashGame.vue';
import CrashFooter from '@/components/crash/CrashFooter.vue';
import GameHistory from '@/components/footer/GameHistory.vue';

export default {
  components: {
    AppBetArea,
    AppHeader,
    GameHistory,
    ResultHistory,
    CrashGame,
    CrashFooter,
    BetsResult,
  },
};
</script>
