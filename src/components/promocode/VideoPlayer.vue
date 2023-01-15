<template>
  <section class="video">
    <div class="intro">
      <div class="video">
        <video
          ref="videoPlayer"
          autoplay
          muted
          loop
          id="vensus-video"
        ></video>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#vensus-video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.intro {
  max-height: 100vh;
  overflow: hidden;
}

.intro:after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  z-index: 2;
}
</style>

<script>
import video from '@/assets/video/vensus11.mov';

export default {
  mounted() {
    this.$refs.videoPlayer.src = video;
  },
};
</script>
