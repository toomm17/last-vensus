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

<script>
import Metamask from '@/services/wallets/metamask';
import Phantom from '@/services/wallets/phantom';

export default {
  data() {
    return {
      coins: [
        { name: 'BNB', img: 'bnb-logo.svg', wallets: [Metamask] },
        { name: 'SOL', img: 'sol.svg', wallets: [Phantom] },
        { name: 'ETH', img: 'eth-logo.svg', wallets: [Metamask] },
      ],
    };
  },

  emits: {
    popupOpen: Object,
  },

  methods: {
    clickOnCoin(coinName) {
      const coinWallets = this.getCoinWallets(coinName);
      this.$emit('popupOpen', coinWallets);
    },

    getCoinWallets(coin) {
      for (let item of this.coins) {
        if (item.name == coin) {
          return item.wallets;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.connected-coins-menu {
  position: absolute;
  padding: 15px 15px 15px 15px;
  background: #272727;
  border-radius: 26px;
  top: 8.5%;
  right: 10%;

  @media screen and (max-width: 1480px) {
    right: 13%;
  }

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
