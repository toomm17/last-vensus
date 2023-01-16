<template>
  <div class="bet-area">
    <div class="bet-container">
      <info-btns />
      <div class="betting-form">
        <div class="betting-form__title">
          <div class="betting-form__title_dot"></div>
          <div class="betting-form__title_text">Betting area</div>
        </div>
        <roulette-bet-chips v-if="this.game == 'Roulette'" />
        <bet-input-area :game="this.game" />
        <crash-autostop v-if="this.game == 'Crash'" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bet-area {
  width: 37%;

  .bet-container {
    width: 378px;
    margin-left: 54px;
    margin-top: 41px;

    @media screen and (max-width: 1480px) {
      width: 320px;
      margin-left: 45px;

      .bet-input {
        font-size: 14px;
      }

      .error::placeholder {
        font-size: 10px;
      }
    }

    @media screen and (max-width: 1160px) {
      width: 250px;
      margin-left: 35px;
    }

    .arrow-down-stream {
      width: 30px;
      margin: 25px auto;
    }
  }
}

.betting-form {
  margin-top: 141px;

  .betting-form__title {
    display: flex;

    .betting-form__title_dot {
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background-color: #ff4900;
      margin-top: 21px;
    }

    .betting-form__title_text {
      font-size: 32px;
      margin-left: 7px;
    }
  }

  .betting-form__description {
    margin-top: 15px;
    margin-left: 17px;
  }

  .betting-buttons-row {
    margin-top: 10px;
    display: flex !important;
    justify-content: space-between;

    .betting-button {
      width: 81.2px;
      height: 49px;
      background: #1b1b1b;
      border: 4.2px solid #272727;
      border-radius: 8.4px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s;
      -webkit-transition: all 0.3s;

      @media screen and (max-width: 1480px) {
        width: 65px;
        height: 40px;

        .inside-text {
          font-size: 16px;
        }
      }
    }

    .betting-button:hover {
      transform: translateY(-2px);
    }
  }
}
</style>

<script>
import InfoBtns from './InfoBtns.vue';
import RouletteBetChips from './RouletteBetChips.vue';
import BetInputArea from './BetInputArea.vue';
import CrashAutostop from './CrashAutostop.vue';

export default {
  components: {
    InfoBtns,
    RouletteBetChips,
    BetInputArea,
    CrashAutostop,
  },

  props: {
    game: {
      type: String,
      required: true,
    },
  },
};
</script>
