<template>
  <div class="logo">
    <img src="@/assets/img/logo.svg" alt="logo" />
    <span>vensus</span>
    <span id="dot">.</span>
  </div>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;

  // @media screen and (max-height: 850px) {
  //   top: 12px;
  // }

  span {
    font-family: 'CeraPro';
    font-size: 25.5px;
    line-height: 32px;
  }

  img {
    margin-right: 10px;
  }

  #dot {
    color: #ff4900;
  }
}
</style>
