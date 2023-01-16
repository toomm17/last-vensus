<template>
  <canvas id="plinko"></canvas>
</template>

<style scoped lang="scss"></style>

<script>
export default {
  props: {
    gameStarted: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
