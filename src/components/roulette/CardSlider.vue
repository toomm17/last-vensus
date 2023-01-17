<template>
  <div class="number-card" :class="this.getColor(this.number)">
    <div class="win-area"></div>
    <span>{{ this.number }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    number: {
      type: Number,
      required: false,
    },
  },

  computed: {
    ...mapGetters(['getColor']),
  },
};
</script>

<style lang="scss">
.number-card {
  width: 82px;
  height: 135px;
  position: relative;
  font-size: 22px;
  line-height: 33px;

  span {
    position: absolute;
    bottom: 6px;
    left: 35px;
  }


}
</style>
