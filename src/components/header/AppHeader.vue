<template>
  <header class="header">
    <div class="header-container">
      <div class="header__row">
        <app-logo />
        <app-urls />
        <div class="header__login">
          <connect-wallet @popupOpen="this.popupOpenHandle" />
          <theme-btn />
          <profile-btn />
        </div>
        <detect-wallets
          :show="this.popupIsOpen"
          :wallets="this.wallets"
          @closePopup="this.popupIsOpen = false"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  border-bottom: 4px solid #272727;
  height: 8.5%;
  align-items: center;
}

.header-container {
  width: 100%;
  padding: 0 40px;
}

.header__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__login {

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

// @media screen and (max-height: 850px) {
//   .header__login {
//     top: 8px;
//   }
// }
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
      wallets: {},
    };
  },

  methods: {
    popupOpenHandle(wallets) {
      console.log(wallets, 'popupOpenHandle');
      this.popupIsOpen = true;
      this.wallets = wallets;
    },
  },
};
</script>
