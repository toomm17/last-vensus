<template>
  <div class="bet-keyboard-area">
    <div class="zero-btn green-num">0</div>
    <div class="keyboard-rows">
      <div class="first-row">
        <div class="keyboard-number red-num">3</div>
        <div class="keyboard-number gray-num">6</div>
        <div class="keyboard-number red-num">9</div>
        <div class="keyboard-number red-num">12</div>
        <div class="keyboard-number gray-num">15</div>
        <div class="keyboard-number red-num">18</div>
        <div class="keyboard-number red-num">21</div>
        <div class="keyboard-number gray-num">24</div>
        <div class="keyboard-number red-num">27</div>
        <div class="keyboard-number red-num">30</div>
        <div class="keyboard-number gray-num">33</div>
        <div class="keyboard-number red-num">36</div>
        <div class="keyboard-number border-num">2:1</div>
      </div>
      <div class="second-row">
        <div class="keyboard-number gray-num">2</div>
        <div class="keyboard-number red-num">5</div>
        <div class="keyboard-number gray-num">8</div>
        <div class="keyboard-number gray-num">11</div>
        <div class="keyboard-number red-num">14</div>
        <div class="keyboard-number gray-num">17</div>
        <div class="keyboard-number gray-num">20</div>
        <div class="keyboard-number red-num">23</div>
        <div class="keyboard-number gray-num">26</div>
        <div class="keyboard-number gray-num">29</div>
        <div class="keyboard-number red-num">32</div>
        <div class="keyboard-number gray-num">35</div>
        <div class="keyboard-number border-num">2:1</div>
      </div>
      <div class="third-row">
        <div class="keyboard-number red-num">1</div>
        <div class="keyboard-number gray-num">4</div>
        <div class="keyboard-number red-num">7</div>
        <div class="keyboard-number gray-num">10</div>
        <div class="keyboard-number gray-num">13</div>
        <div class="keyboard-number red-num">16</div>
        <div class="keyboard-number red-num">19</div>
        <div class="keyboard-number gray-num">22</div>
        <div class="keyboard-number red-num">25</div>
        <div class="keyboard-number gray-num">28</div>
        <div class="keyboard-number gray-num">31</div>
        <div class="keyboard-number red-num">34</div>
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
