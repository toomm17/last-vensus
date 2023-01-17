<template>
  <div class="game-slider">
    <div class="left-shadow"></div>
    <div class="right-shadow"></div>

    <div class="stop-arrow">
      <img src="@/assets/img/roulette-arrow.svg" alt="" />
    </div>

    <div class="yava-diff">
      <template v-for="index in 3" :key="index">
        <card-slider :number="0" />
        <card-slider :number="32" />
        <card-slider :number="15" />
        <card-slider :number="19" />
        <card-slider :number="4" />
        <card-slider :number="21" />
        <card-slider :number="2" />
        <card-slider :number="25" />
        <card-slider :number="17" />
        <card-slider :number="34" />
        <card-slider :number="6" />
        <card-slider :number="27" />
        <card-slider :number="13" />
        <card-slider :number="36" />
        <card-slider :number="11" />
        <card-slider :number="30" />
        <card-slider :number="8" />
        <card-slider :number="23" />
        <card-slider :number="10" />
        <card-slider :number="5" />
        <card-slider :number="24" />
        <card-slider :number="16" />
        <card-slider :number="33" />
        <card-slider :number="1" />
        <card-slider :number="20" />
        <card-slider :number="14" />
        <card-slider :number="31" />
        <card-slider :number="9" />
        <card-slider :number="22" />
        <card-slider :number="18" />
        <card-slider :number="29" />
        <card-slider :number="7" />
        <card-slider :number="28" />
        <card-slider :number="12" />
        <card-slider :number="35" />
        <card-slider :number="3" />
        <card-slider :number="26" />
      </template>
    </div>
  </div>
</template>

<script>
import CardSlider from './CardSlider.vue';

export default {
  mounted() {
    this.autoSlider();
  },

  components: {
    CardSlider,
  },

  methods: {
    autoSlider() {
      let left = 0;
      let timer = setInterval(() => {
        const slider = document.querySelector('.yava-diff');
        left -= 7;
        slider.style.left = left + 'px';
      }, 5);

      setTimeout(() => {
        clearInterval(timer);
      }, 5000);
    },

    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    },
  },
};
</script>

<style lang="scss">
.game-slider {
  position: relative;
  margin-top: 20px;
  overflow: hidden;
  border: 1px solid transparent;

  .left-shadow {
    display: inline-block;
    width: 17%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -5px;
    bottom: 0;
    background: linear-gradient(270deg, #1b1b1b 0%, rgba(27, 27, 27, 0) 100%);
    transform: rotate(-180deg);
    z-index: 1;
  }

  .right-shadow {
    display: inline-block;
    width: 76px;
    height: 191px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(270deg, #1b1b1b 0%, rgba(27, 27, 27, 0) 100%);
    z-index: 1;
  }

  .stop-arrow {
    position: relative;
    width: 31px;
    height: 31px;
    margin: 0 auto;
    background: linear-gradient(180deg, #535353 0%, #292929 100%);
    border-radius: 100%;

    img {
      position: absolute;
      top: 10px;
      left: 14px;
      z-index: 2;
    }
  }

  .yava-diff {
    display: inline-flex;
    margin-top: 12px;
    z-index: 0;
    position: relative;
  }

  .win-area {
    position: absolute;
    width: 63px;
    height: 63px;
    border-radius: 11.8135px;
    top: 9px;
    left: 9px;
  }

  .gray-num .win-area {
    background: #636363;
  }

  .green-num .win-area {
    background: #2b9665;
  }

  .red-num .win-area {
    background: #bc4130;
  }
}
</style>
