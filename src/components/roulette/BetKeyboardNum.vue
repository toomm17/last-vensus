<template>
  <div class="keyboard-number" :class="this.getColor(this.number)">
    {{ this.number }}
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
.keyboard-number {
  width: 55px;
  height: 55px;
  border-radius: 7.04039px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3.5px;
  font-size: 16px;
}
</style>
