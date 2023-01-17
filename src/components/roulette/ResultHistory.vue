<template>
  <div class="roulette-result-history">
    <bet-keyboard-num :number="3" />
    <bet-keyboard-num :number="5" />
    <bet-keyboard-num :number="7" />
    <bet-keyboard-num :number="1" />
    <bet-keyboard-num :number="0" />
    <bet-keyboard-num :number="36" />
    <bet-keyboard-num :number="21" />
    <bet-keyboard-num :number="24" />
    <bet-keyboard-num :number="2" />
    <bet-keyboard-num :number="3" />
    <bet-keyboard-num :number="6" />
    <bet-keyboard-num :number="4" />
    <bet-keyboard-num :number="27" />
    <bet-keyboard-num :number="15" />
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

<style lang="scss" scoped>
.roulette-result-history {
  display: flex;
  justify-content: space-between;
}
</style>
