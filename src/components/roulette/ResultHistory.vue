<template>
  <div class="roulette-result-history">
    <div class="result-number red-num">3</div>
    <div class="result-number gray-num">10</div>
    <div class="result-number red-num">19</div>
    <div class="result-number red-num">3</div>
    <div class="result-number gray-num">5</div>
    <div class="result-number red-num">3</div>
    <div class="result-number green-num">5</div>
    <div class="result-number gray-num">3</div>
    <div class="result-number green-num">3</div>
    <div class="result-number red-num">3</div>
    <div class="result-number green-num">3</div>
    <div class="result-number gray-num">3</div>
    <div class="result-number red-num">3</div>
    <div class="result-number gray-num">3</div>
  </div>
</template>

<style lang="scss" scoped>
.roulette-result-history {
  display: flex;
  justify-content: space-between;

  .result-number {
    display: flex;
    width: 55.15px;
    height: 55.15px;
    border-radius: 7.04039px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
}
</style>
