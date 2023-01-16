import detectEthereumProvider from '@metamask/detect-provider';
import Wallet from './builders';

export default class Metamask extends Wallet {
  static name = 'Metamask';
  static downloadUrl = 'https://metamask.io/';
  static imgPath = require('@/assets/img/metamask-logo.png');

  constructor(coin) {
    super();
    this.coin = coin;
    this.providerIsDetected = false;
  }

  async detectProvider() {
    const provider = await detectEthereumProvider();
    if (provider) {
      this.providerIsDetected = true;
      Metamask.provider = provider;
      return provider;
    }
  }

  async swapChain(newChain) {
    await this.provder.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: newChain }],
    });
  }

  async getCurrentChainId() {
    return await this.provider.request({ method: 'eth_chainId' });
  }

  async getWalletAddress() {
    const accounts = await this.provider.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    return account;
  }

  async connectWallet() {
    
  }
}
