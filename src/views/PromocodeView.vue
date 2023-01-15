<template>
  <video-player />
  <inputs-area />
</template>

<script>
import VideoPlayer from '@/components/promocode/VideoPlayer.vue';
import InputsArea from '@/components/promocode/InputsArea.vue';

export default {
  components: {
    VideoPlayer,
    InputsArea,
  },
};
</script>
