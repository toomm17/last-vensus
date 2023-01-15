<template>
  <div class="connected-coins-menu">
    <ul class="connected-coins">
      <template v-for="coin in this.coins" :key="coin.id">
        <li class="coin" @click="this.clickOnCoin(coin.name)">
          <img class="coin-logo" :src="require(`@/assets/img/${coin.img}`)" alt="" />
          <span class="coin-name">{{ coin.name }}</span>
          <span class="coin-connect">Connect</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.connected-coins-menu {
  position: absolute;
  padding: 15px 15px 15px 15px;
  background: #272727;
  border-radius: 26px;
  top: 60px;
  left: -15px;

  .coin {
    display: flex;
    align-items: center;
    width: 255px;
    height: 44px;
    background: #1b1b1b;
    border-radius: 93px;
    cursor: pointer;

    img {
      margin-left: 14px;
      width: 23px;
      height: 23px;
    }

    span {
      color: #535353;
    }

    .coin-name {
      margin-left: 10px;
    }

    .coin-connect {
      margin-left: 73px;
      font-size: 16px;
    }
  }

  .coin:hover {
    background: #535353;

    span {
      color: #ffffff;
    }
  }

  .coin:not(:last-child) {
    margin-bottom: 9px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      coins: [
        { name: 'BNB', img: 'bnb-logo.svg', wallets: ['Metamask'] },
        { name: 'SOL', img: 'sol.svg', wallets: ['Metamask'] },
        { name: 'ETH', img: 'eth-logo.svg', wallets: ['Metamask'] },
        { name: 'TON', img: 'ton-logo.png', wallets: ['Metamask'] },
      ],
    };
  },

  emits: {
    popupOpen: Object,
  },

  methods: {
    clickOnCoin(coinName) {
      this.$emit('popupOpen', { coinName: coinName });
    },
  },
};
</script>
