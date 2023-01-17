<template>
  <div class="bet-keyboard-area">
    <div class="zero-btn green-num">0</div>
    <div class="keyboard-rows">
      <div class="first-row">
        <bet-keyboard-num :number="3" />
        <bet-keyboard-num :number="6" />
        <bet-keyboard-num :number="9" />
        <bet-keyboard-num :number="12" />
        <bet-keyboard-num :number="15" />
        <bet-keyboard-num :number="18" />
        <bet-keyboard-num :number="21" />
        <bet-keyboard-num :number="24" />
        <bet-keyboard-num :number="27" />
        <bet-keyboard-num :number="30" />
        <bet-keyboard-num :number="33" />
        <bet-keyboard-num :number="36" />
        <div class="keyboard-number border-num">2:1</div>
      </div>
      <div class="second-row">
        <bet-keyboard-num :number="2" />
        <bet-keyboard-num :number="5" />
        <bet-keyboard-num :number="8" />
        <bet-keyboard-num :number="11" />
        <bet-keyboard-num :number="14" />
        <bet-keyboard-num :number="17" />
        <bet-keyboard-num :number="20" />
        <bet-keyboard-num :number="23" />
        <bet-keyboard-num :number="26" />
        <bet-keyboard-num :number="29" />
        <bet-keyboard-num :number="32" />
        <bet-keyboard-num :number="35" />
        <div class="keyboard-number border-num">2:1</div>
      </div>
      <div class="third-row">
        <bet-keyboard-num :number="1" />
        <bet-keyboard-num :number="4" />
        <bet-keyboard-num :number="7" />
        <bet-keyboard-num :number="10" />
        <bet-keyboard-num :number="3" />
        <bet-keyboard-num :number="6" />
        <bet-keyboard-num :number="9" />
        <bet-keyboard-num :number="22" />
        <bet-keyboard-num :number="25" />
        <bet-keyboard-num :number="28" />
        <bet-keyboard-num :number="31" />
        <bet-keyboard-num :number="34" />
        <div class="keyboard-number border-num">2:1</div>
      </div>
      <div class="fourth-row">
        <div class="num-to-num-bet border-num">1 to 12</div>
        <div class="num-to-num-bet border-num">13 to 24</div>
        <div class="num-to-num-bet border-num">25 to 36</div>
      </div>
      <div class="fifth-row">
        <div class="num-to-num-bet border-num">1 to 18</div>
        <div class="num-to-num-bet border-num">Even</div>
        <div class="num-to-num-bet red-num"></div>
        <div class="num-to-num-bet gray-num"></div>
        <div class="num-to-num-bet border-num">Odd</div>
        <div class="num-to-num-bet border-num">19 to 36</div>
      </div>
    </div>
  </div>
</template>

<script>
import BetKeyboardNum from './BetKeyboardNum.vue';

export default {
  components: {
    BetKeyboardNum,
  },
};
</script>

<style scoped lang="scss">
.bet-keyboard-area {
  display: flex;
  width: 100%;
  height: 290px;
  margin-top: 72px;

  .zero-btn {
    height: 173px;
    width: 55px;
    border-radius: 7.04039px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3.5px;
    font-size: 16px;
  }

  .keyboard-rows {
    width: 764px;
  }

  .first-row,
  .second-row,
  .third-row,
  .fourth-row,
  .fifth-row {
    display: flex;
    margin-bottom: 3.5px;
  }

  .fourth-row,
  .fifth-row {
    margin-top: 3.5px;

    .num-to-num-bet {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7.04039px;
      margin-right: 3.5px;
    }
  }

  .fourth-row {
    .num-to-num-bet {
      width: 232px;
      height: 55px;
    }
  }

  .fifth-row {
    .num-to-num-bet {
      width: 114px;
      height: 55px;
    }
  }
}
</style>
