class ConnectWallet {
  constructor() {
    this.connect = true;
  }

  async detectProvider() {}

  async swapChain(newChain) {}

  async getCurrentChainId() {}

  async getWalletAddress() {}

  async connectWallet() {}
}

class SignWallet {
  
  MATH_DIVIDER = 10000000
  MESSAGE_STRING = 'Authorize your wallet to play !\n\n Your nonce:'

  createSignMessage() {
      const generatedNonce = Math.floor(Math.random() * this.MATH_DIVIDER)
      return this.MESSAGE_STRING.concat(' '. generatedNonce)
  }

  signWallet() {}
}

export default class Wallet  {
  constructor() {
    this.connect = new ConnectWallet()
    this.sign = new SignWallet()
  }
}
