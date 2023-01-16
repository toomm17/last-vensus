import Wallet from './builders';

export default class Phantom extends Wallet {
  static name = 'Phantom ';
  static downloadUrl = 'https://phantom.app/';
  static imgPath = require('@/assets/img/phantom-logo.png');

  constructor(coin) {
    super();
    this.coin = coin;
    this.providerIsDetected = false;
  }

  async detectProvider() {
    if ('solana' in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        return provider;
      }
    }
  }

  async connectWallet() {}
}
