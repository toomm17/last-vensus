<template>
  <app-header />
  <div class="content">
    <div class="game-area">
      <div class="game-container">
        <result-history />
        <game-slider />
        <bet-keyboard />
      </div>
    </div>
    <app-bet-area game="Roulette" />
  </div>
  <game-history />
</template>

<style lang="scss">
.red-num {
  background: #dd4c38;
}

.gray-num {
  background: #535353;
}

.green-num {
  background: #38bb7f;
}

.creme-num {
  background: #fc764c;
}

.yellow-num {
  background: #ff8c38;
}

.orange-num {
  background: #ff7438;
}

.bright-orange-num {
  background: #ff4900;
}

.creme-num-color {
  color: #fc764c;
}

.yellow-num-color {
  color: #ff8c38;
}

.orange-num-color {
  color: #ff7438;
}

.bright-orange-num-color {
  color: #ff4900;
}

.border-num {
  border: 3.52019px solid #272727;
  display: flex;
  justify-content: center;
  align-items: center;
}

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

  .game-container {
    width: 822.05px;
    align-items: center;
    margin: 80px auto;
  }
}

@media screen and (max-height: 850px) {
  .game-area {
    .game-container {
      margin: 20px auto;
    }
  }
}
</style>

<script>
import AppBetArea from '@/components/betting-area/AppBetArea.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import GameHistory from '@/components/footer/GameHistory.vue';
import ResultHistory from '@/components/roulette/ResultHistory.vue';
import GameSlider from '@/components/roulette/GameSlider.vue';
import BetKeyboard from '@/components/roulette/BetKeyboard.vue';

export default {
  components: {
    AppBetArea,
    AppHeader,
    GameHistory,
    ResultHistory,
    GameSlider,
    BetKeyboard,
  },
};
</script>
