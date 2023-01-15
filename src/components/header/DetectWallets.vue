<template>
  <div class="detect-wallet-area" v-if="this.show">
    <div class="detect-wallet__title">
      Connect a wallet to continue
      <img class="close-icon" src="@/assets/img/close.svg" @click="this.closePopup" />
    </div>
    <div class="wallets-row"></div>
  </div>
</template>

<style scoped lang="scss">
.detect-wallet-area {
  width: 757px;
  height: 260px;
  position: absolute;
  left: 30%;
  top: 30%;
  background: #1b1b1b;
  z-index: 5;
  border: 4px solid #272727;
  border-radius: 46px;
  text-align: center;
  transition: all 0.9s;

  .detect-wallet__title {
    font-size: 32px;
    margin-top: 28px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
  }

  .close-icon {
    position: absolute;
    right: 50px;
    cursor: pointer;
  }
}
</style>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: false,
    },
    wallets: {
      type: Array,
      required: false,
    },
  },

  methods: {
    closePopup() {
      this.$emit('closePopup', true);
    },
  },

  watch: {
    show(value) {
      if (value) {
        console.log(value);
      } else {
        console.log(value);
      }
    },
  },
};
</script>
