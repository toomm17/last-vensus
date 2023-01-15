<template>
  <div class="betting-form__description" v-if="this.game !== 'Roulette'">
    Enter your bet amount:
  </div>
  <div class="betting-form__description" v-if="this.game == 'Roulette'">
    Or enter your bet amount:
  </div>
  <input type="number" class="bet-input" placeholder="(Minimal - 0.02 $SOL)" />
  <div class="betting-buttons-row">
    <div class="betting-button">
      <div class="inside-text">min</div>
    </div>
    <div class="betting-button">
      <div class="inside-text">1/2</div>
    </div>
    <div class="betting-button">
      <div class="inside-text">2x</div>
    </div>
    <div class="betting-button">
      <div class="inside-text">max</div>
    </div>
  </div>
  <div
    class="accept-bet-btn roulette-btn disabled"
    disabled="disabled"
    v-if="this.game == 'Roulette'"
  >
    Next round after 15 s
  </div>
  <div class="accept-bet-btn plinko-btn" v-if="this.game == 'Plinko'">Run one ball</div>
  <div class="accept-bet-btn crash-btn" v-if="this.game == 'Crash'">Set bet (next round)</div>
</template>

<style lang="scss" scoped>
.roulette-btn {
  width: 223px !important;
}

.crash-btn {
  width: 263px !important;
}

.disabled {
  background: #272727 !important;
  color: #949494 !important;
}
</style>

<script>
export default {
  props: {
    game: {
      type: String,
      required: false,
    },
  },
};
</script>
