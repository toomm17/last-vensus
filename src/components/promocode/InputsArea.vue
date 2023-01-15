<template>
  <div class="promocode-form">
    <div class="promocode-form__container">
      <div class="promocode-logo">
        <img src="@/assets/img/promocode-logo.svg" alt="logo" />
        <span>vensus</span>
        <span id="dot">.</span>
      </div>
      <inputs />
      <easter-egg />
    </div>
  </div>
</template>

<style scoped lang="scss">
.promocode-form {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
}

.promocode-form__container {
  max-width: 940px;
  height: 68px;
  margin: 160px auto;

  @media screen and (max-width: 479px) {
    margin: 185px auto;
  }
}

.promocode-logo {
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 16.5px;
  }

  span {
    font-family: 'CeraPro';
    font-size: 42.5px;
    line-height: 32px;
    color: #fff;
  }

  #dot {
    color: #ff4900;
  }

  @media screen and (max-width: 479px) {
    span {
      font-size: 35.5px;
    }
  }
}
</style>

<script>
import Inputs from './Inputs.vue';
import EasterEgg from './EasterEgg.vue';

export default {
  components: {
    Inputs,
    EasterEgg,
  },
};
</script>
