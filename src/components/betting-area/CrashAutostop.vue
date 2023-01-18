<template>
  <div class="autostop-settings">
    <div class="autostop-enable"></div>
    <div class="autostop-coefficient">
      <div class="autostop__title">Autostop:</div>
      <div class="autostop__coeff-number">2x</div>
    </div>
    <div class="plus-minus-btns">
      <img src="@/assets/img/minus-btn.svg" alt="" />
      <img src="@/assets/img/plus-btn.svg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.autostop-settings {
  width: 100%;
  height: 67.2px;
  border: 4.2px solid #272727;
  border-radius: 8.4px;
  display: flex;
  align-items: center;

  .autostop-enable {
    width: 63px;
    height: 30px;
    background: linear-gradient(135deg, #ff4900 0%, #ff6c36 100%);
    border-radius: 136px;
    position: relative;
    margin-left: 27px;
  }

  .autostop-enable::after {
    position: absolute;
    content: '';
    width: 25px;
    height: 25px;
    background: #000000;
    border-radius: 100%;
    right: 4px;
    top: 3px;
  }

  .autostop-coefficient {
    display: flex;
    margin-left: 30px;

    .autostop__coeff-number {
      margin-left: 10px;
      color: #ff4900;
    }
  }

  .plus-minus-btns {
    display: flex;
    margin-left: 41px;
    img:not(last-child) {
      margin-right: 10px;
    }
  }
}
</style>
