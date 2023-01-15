<template>
  <div class="bet-result-row">
    <div class="username">User...</div>
    <div class="bet-coefficient creme-num-color">x4.15</div>
    <div class="coin-img"><img src="@/assets/img/eth-logo.svg" alt="" /></div>
    <div class="bet-amount orange-num-color">0.0068</div>
  </div>
</template>

<style lang="scss" scoped>
.bet-result-row {
  display: flex;
  font-size: 16px;
  margin-bottom: 17px;

  .username {
    margin-right: 33px;
  }

  .bet-coefficient {
    margin-right: 10px;
  }

  img {
    width: 23px;
    height: 23px;
    margin-right: 8px;
  }
}
</style>
