<template>
  <app-header />
  <div class="content">
    <div class="game-area">
      <div class="game-container">
        <h1>Plinko</h1>
      </div>
    </div>
    <app-bet-area game="Plinko" />
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
}
</style>

<script>
import AppBetArea from '@/components/betting-area/AppBetArea.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import GameHistory from '@/components/footer/GameHistory.vue';

export default {
  components: {
    AppBetArea,
    AppHeader,
    GameHistory,
  },
};
</script>
