<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <app-logo />
        <app-urls />
        <div class="header__login">
          <connect-wallet @popupOpen="this.popupOpenHandle(coinName)" />
          <theme-btn />
          <profile-btn />
        </div>
        <detect-wallets
          :show="this.popupIsOpen"
          :wallets="this.coinName"
          @closePopup="this.popupIsOpen = false"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 4px solid #272727;
  height: 8.5%;
}

.header__row {
  display: flex;
  align-items: center;
}

.header__login {
  position: absolute;
  right: 55px;
  top: 15px;

  @media screen and (max-width: 1480px) {
    // margin-left: 0;
  }

  @media screen and (max-width: 1160px) {
    margin-left: 50px;

    .connect__btn span {
      display: none;
    }

    #arrow-svg {
      display: none;
    }

    #wallet-svg {
      margin-left: 8px;
    }
  }

  a {
    display: inline-flex;
    background: #272727;
    align-items: center;
    margin-right: 15px;
  }

  a:hover {
    background: #535353;
  }

  a:last-child {
    margin-right: 0;
  }

  #wallet-svg {
    margin-right: 12px;
  }

  #arrow-svg {
    margin-left: 10px;
  }
}
</style>

<script>
import AppLogo from '@/components/header/AppLogo.vue';
import AppUrls from '@/components/header/AppUrls.vue';
import ConnectWallet from '@/components/header/ConnectWallet.vue';
import ThemeBtn from '@/components/header/ThemeBtn.vue';
import ProfileBtn from '@/components/header/ProfileBtn.vue';
import DetectWallets from '@/components/header/DetectWallets.vue';

export default {
  components: {
    AppLogo,
    AppUrls,
    ConnectWallet,
    ThemeBtn,
    ProfileBtn,
    DetectWallets,
  },

  data() {
    return {
      popupIsOpen: false,
      coinName: {},
    };
  },

  methods: {
    popupOpenHandle(coinName) {
      (this.popupIsOpen = true), (this.coinName = coinName);
    },
  },
};
</script>
