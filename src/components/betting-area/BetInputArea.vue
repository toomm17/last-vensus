<template>
  <div class="betting-form__description" v-if="this.game !== 'Roulette'">
    Enter your bet amount:
  </div>
  <div class="betting-form__description" v-if="this.game == 'Roulette'">
    Or enter your bet amount:
  </div>
  <input
    type="number"
    class="bet-input"
    :class="{ error: hasError }"
    :placeholder="inputPlaceholder"
    ref="betInput"
  />
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
  <div class="accept-bet-btn roulette-btn" v-if="this.game == 'Roulette'" @click="this.clickBetBtn">
    Set bet
  </div>
  <div
    class="accept-bet-btn plinko-btn"
    :class="{ disabled: this.plinkoCountClick >= 3 }"
    :disabled="this.plinkoCountClick >= 3"
    v-if="this.game == 'Plinko'"
    @click="this.clickBetBtn"
  >
    Run one ball
  </div>
  <div class="accept-bet-btn crash-btn" v-if="this.game == 'Crash'" @click="this.clickBetBtn">
    Set bet (next round)
  </div>
</template>

<style lang="scss" scoped>
.bet-input {
  width: 100%;
  height: 67.2px;
  margin-top: 10px;
  background: #535353;
  border-radius: 15.4px;
  padding-left: 26.6px;
  color: #949494;
}

.accept-bet-btn {
  width: 193px;
  height: 43px;
  margin: 31px auto;
  background: #ff4900;
  border-radius: 24.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

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

.error {
  background: #000000 !important;
  border: 4.2px solid #ff4900;
  border-radius: 15.4px !important;
}

.error::placeholder {
  color: #ff4900;
  font-size: 14px;
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

  data() {
    return {
      hasError: false,
      inputPlaceholder: '(Minimal - 0.02 $SOL)',
      plinkoCountClick: 0,
    };
  },

  methods: {
    changeInput() {
      this.$refs.betInput.value = '';
      const newPlaceholder = 'The game is only after investment';
      this.hasError = true;
      this.inputPlaceholder = newPlaceholder;
    },

    clickBetBtn() {
      if (this.game !== 'Plinko') {
        this.changeInput();
      } else {
        this.plinkoCountClick += 1;
        if (this.plinkoCountClick > 2) {
          this.changeInput();
        }
      }
      console.log(this.plinkoCountClick);
    },
  },
};
</script>
