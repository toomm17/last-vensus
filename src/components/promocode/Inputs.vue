<template>
  <div class="promocode-inputs">
    <input
      type="text"
      maxlength="1"
      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
      class="promocode-input"
      id="input1"
    />
    <input
      type="text"
      maxlength="1"
      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
      class="promocode-input"
      id="input2"
    />
    <input
      type="text"
      maxlength="1"
      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
      class="promocode-input"
      id="input3"
    />
    <input
      type="text"
      maxlength="1"
      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
      class="promocode-input"
      id="input4"
    />
    <input
      type="text"
      maxlength="1"
      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
      class="promocode-input"
      id="input5"
    />
    <input
      type="text"
      maxlength="1"
      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
      class="promocode-input"
      id="input6"
    />
    <input
      type="text"
      maxlength="1"
      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
      class="promocode-input"
      id="input7"
    />
  </div>
</template>

<style scoped lang="scss">
.promocode-inputs {
  width: 100%;
  margin-top: 55px;
  display: flex;
  justify-content: center;
  input {
    width: 120px;
    height: 140px;
    background: #000000;
    border: 6px solid #272727;
    border-radius: 15.0837px;
    color: #fff;
    margin-right: 10px;
    text-align: center;
    font-size: 55px;
  }

  @media screen and (max-width: 479px) {
    .promocode-input {
      width: 50px;
      height: 55px;
      border-radius: 10.0837px;
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 928px) {
    .promocode-input {
      width: 50px;
      height: 70px;
      font-size: 35px;
    }
  }

  input:last-child {
    margin-right: 0;
  }
}

@media screen and (max-width: 479px) {
  .promocode-inputs {
    display: none;
  }
}
</style>

<script>
export default {
  mounted() {
    document.addEventListener('keydown', (event) => this.keydownInputEvent(event));
    document.addEventListener('focusin', (event) => this.inputAddBorder(event.target));
    document.addEventListener('focusout', (event) => this.emptyFocusoutEvent(event));

    const inputs = document.querySelectorAll('.promocode-input');
    this.inputs = inputs;
  },

  destroyed() {
    document.removeEventListener('keydown', this.keydownInputEvent());
    document.removeEventListener('focusin', this.inputAddBorder());
    document.removeEventListener('focusout', this.emptyFocusoutEvent());
  },

  data() {
    return {
      inputs: null,
      currentPromocode: [],
    };
  },

  methods: {
    getInput() {
      const inputForKey = this.inputs[this.currentPromocode.length];
      return inputForKey;
    },

    getInputIndex(input) {
      return Number(input.id.slice(5)) - 1;
    },

    inputAddBorder(input) {
      input.style.border = '6px solid #FFFFFF';
    },

    clearInput(input) {
      input.value = '';
      input.style.border = '6px solid #272727';
    },

    pushPromocode(key) {
      if (this.currentPromocode.length < 7) {
        this.currentPromocode.push(key);
      }
    },

    addValue(key) {
      const input = this.getInput();
      this.pushPromocode(key);
      input.value = key;
      input.focus();
      this.inputAddBorder(input);
    },

    keydownInputEvent(event) {
      if (!isNaN(event.key)) {
        this.addValue(event.key);
      }

      if (event.key === 'Backspace') {
        this.backspaceEvent(event);
      }

      if (event.key === 'Enter') {
        this.enterEvent();
      }
    },

    emptyFocusoutEvent(event) {
      if (event.target.value === '') {
        this.clearInput(event.target);
      }
    },

    addAcceptPromoInputStyles() {
      this.inputs.forEach((item) => {
        console.log(item);
        item.style.border = '6px solid #FF4900';
        item.style.color = '#FF4900';
      });
    },

    removeLetterFromPromocode(input) {
      const inputIndex = this.getInputIndex(input);
      this.currentPromocode.splice(inputIndex, 1);
    },

    backspaceEvent(event) {
      if (event.target.value !== '') {
        this.removeLetterFromPromocode(event.target);
      } else {
        const nextInput = this.inputs[this.currentPromocode.length - 1];
        nextInput.focus();
        this.removeLetterFromPromocode(nextInput);
      }
    },

    enterEvent() {
      const promocode = 2812023;
      if (Number(this.currentPromocode.join('')) === promocode) {
        this.addAcceptPromoInputStyles();
        setTimeout(() => {
          this.$router.push('roulette');
        }, 1500);
      }
    },
  },
};
</script>
