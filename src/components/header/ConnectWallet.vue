<template>
  <a href="#" class="connect__btn" @click="this.clickOnConnectWallet">
    <svg
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="wallet-svg"
    >
      <path
        d="M6.00033 21.6667C4.53366 21.6667 3.2781 21.1445 2.23366 20.1C1.18921 19.0556 0.666992 17.8 0.666992 16.3334V5.66671C0.666992 4.20004 1.18921 2.94449 2.23366 1.90004C3.2781 0.855596 4.53366 0.333374 6.00033 0.333374H22.0003C23.467 0.333374 24.7225 0.855596 25.767 1.90004C26.8114 2.94449 27.3337 4.20004 27.3337 5.66671V16.3334C27.3337 17.8 26.8114 19.0556 25.767 20.1C24.7225 21.1445 23.467 21.6667 22.0003 21.6667H6.00033ZM6.00033 6.00004H22.0003C22.6448 6.00004 23.2503 6.10004 23.817 6.30004C24.3837 6.50004 24.8892 6.78893 25.3337 7.16671V5.66671C25.3337 4.73337 25.0114 3.94449 24.367 3.30004C23.7225 2.6556 22.9337 2.33337 22.0003 2.33337H6.00033C5.06699 2.33337 4.2781 2.6556 3.63366 3.30004C2.98921 3.94449 2.66699 4.73337 2.66699 5.66671V7.16671C3.11144 6.78893 3.61699 6.50004 4.18366 6.30004C4.75033 6.10004 5.35588 6.00004 6.00033 6.00004ZM2.76699 10.5334L18.667 14.3667C18.8225 14.4112 18.9837 14.4167 19.1503 14.3834C19.317 14.35 19.4559 14.2778 19.567 14.1667L24.9003 9.70004C24.6114 9.18893 24.2114 8.77782 23.7003 8.46671C23.1892 8.1556 22.6225 8.00004 22.0003 8.00004H6.00033C5.22255 8.00004 4.53366 8.23893 3.93366 8.71671C3.33366 9.19449 2.94477 9.80004 2.76699 10.5334Z"
        fill="white"
      />
    </svg>
    <span>Connect wallet</span>
    <template v-if="this.currentState === 1">
      <svg
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="arrow-svg"
      >
        <path
          d="M1 1.05151L6.89697 6.94849L12.7939 1.05151"
          stroke="white"
          stroke-width="2.14435"
        />
      </svg>
    </template>
    <template v-if="this.currentState !== 1">
      <svg
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="arrow-svg"
      >
        <path
          d="M12.7939 7.94849L6.89697 2.05151L1 7.94849"
          stroke="white"
          stroke-width="2.14435"
        ></path>
      </svg>
    </template>
  </a>
  <coin-menu v-if="this.currentState === 2" @popupOpen="this.popupHandle(coinName)" />
</template>

<style scoped lang="scss">
.connect__btn {
  height: 48px;
  line-height: 48px;
  padding-left: 23px;
  padding-right: 20px;
  border-radius: 24.5px;
}
</style>

<script>
import CoinMenu from './CoinMenu.vue';

export default {
  components: {
    CoinMenu,
  },

  data() {
    return {
      connectWalletStates: {
        1: 'Close',
        2: 'Chains menu',
        3: 'Wallets menu',
        4: '',
      },
      currentState: 1,
    };
  },

  methods: {
    clickOnConnectWallet() {
      if (this.currentState === 2) {
        this.currentState = 1;
      } else {
        this.currentState += 1;
      }
    },

    popupHandle(coinName) {
      this.$emit('popupOpen', { coinName: coinName });
    },
  },
};
</script>
