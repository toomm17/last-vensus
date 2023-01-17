<template>
  <div class="chips-area">
    <div class="area-title">Choose bet amount:</div>
    <div class="chips">
      <template v-for="chip in this.chips" :key="chip.id">
        <img :src="require(`@/assets/img/${chip.path}`)" alt="" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chips-area {
  margin-top: 15px;

  .area-title {
    font-size: 18px;
    margin-left: 15px;
  }

  .chips {
    display: flex;
    margin-top: 12px;

    img {
      margin-right: 16px;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 1480px) {
  .chips {
    img {
      width: 55px;
      height: 55px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      chips: [
        { path: '05_bet.svg' },
        { path: '0.1 bet.svg' },
        { path: '0.2 bet.svg' },
        { path: '1 bet.svg' },
        { path: 'your bet.svg' },
      ],
    };
  },
};
</script>
