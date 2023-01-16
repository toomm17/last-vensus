<template>
  <div class="detect-wallet-area" v-if="this.show">
    <div class="detect-wallet__title">
      Connect a wallet to continue
      <img class="close-icon" src="@/assets/img/close.svg" @click="this.closePopup" />
    </div>
    <div class="wallets-row">
      <div class="wallet" v-for="wallet in this.wallets.wallets" :key="wallet.id">
        <div class="wallet-icon"><img :src="wallet.imgPath" alt="" /></div>
        <div class="wallet-title">{{ wallet.name }}</div>
        <div class="wallet-provider" v-if="this.detectWalletProvider(wallet)">(detected)</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detect-wallet-area {
  width: 757px;
  position: absolute;
  left: 30%;
  top: 30%;
  background: #1b1b1b;
  z-index: 5;
  border: 4px solid #272727;
  border-radius: 46px;
  text-align: center;
  transition: all 0.9s;
  padding-bottom: 20px;

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

.wallets-row {
  display: flex;
  text-align: center;
  margin-left: 50px;
  margin-top: 36px;

  .wallet {
    display: flex;
    border: 4px solid #272727;
    border-radius: 52px;
    align-items: center;
    height: 62px;
    width: 319px;
    margin-right: 20px;
    cursor: pointer;

    img {
      width: 37px;
      height: 37px;
      margin-left: 14px;
      margin-right: 18px;
    }

    .wallet-title {
      margin-right: 10px;
    }

    .wallet-provider {
      color: #535353;
      margin-right: 62px;
    }
  }

  .wallet:hover {
    background: #272727;
    border: 4px solid #535353;
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

    async detectWalletProvider(wallet) {
      const provider = await wallet.prototype.detectProvider();
      if (provider) {
        return true;
      } else {
        return false;
      }
    },
  },

  watch: {
    show(value) {
      if (value) {
        console.log(value);
        console.log(this.wallets.wallets);
      } else {
        console.log(value);
      }
    },
  },
};
</script>
