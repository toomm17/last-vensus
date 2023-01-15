<template>
  <div class="result-history-area">
    <div class="result-number creme-num"><span>1.1x</span></div>
    <div class="result-number yellow-num"><span>2.4x</span></div>
    <div class="result-number orange-num"><span>4x</span></div>
    <div class="result-number bright-orange-num"><span>36.3x</span></div>
    <div class="result-number creme-num"><span>1.1x</span></div>
    <div class="result-number yellow-num"><span>2.4x</span></div>
    <div class="result-number orange-num"><span>4x</span></div>
    <div class="result-number orange-num"><span>3x</span></div>
  </div>
</template>

<style lang="scss" scoped>
.result-history-area {
  display: flex;
  margin: 0 auto;
  justify-content: center;

  .result-number {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 20px;
    margin-right: 10px;
    border-radius: 143px;
    color: #000000;

    span {
      opacity: 0.4;
    }
  }
}
</style>
