<template>
  <div class="phone-eggs-__-" @click="this.clickOnEgg">
    <div class="phone-eggs-__-text">
      {{ this.createText }}<span>{{ this.spanText }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.phone-eggs-__- {
  width: 100%;
  display: inline-block;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}

.phone-eggs-__- {
  display: none;
  font-size: 25px;
  font-family: 'CeraPro';
  color: #fff;
}

.phone-error-container {
  width: 100%;
  display: block;
  text-align: center;
  align-items: center;
}

.phone-error {
  font-family: 'CeraPro';
  font-size: 55px;
  margin-top: 200px;
}

.phone-error-lost-text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'CeraPro';
  font-size: 45px;
  margin: 25px auto;

  span {
    font-size: 45px;
    color: #ff4900;
  }
}

@media screen and (max-width: 479px) {
  .phone-eggs-__- {
    display: inline-block;
    font-size: 32px;

    span {
      color: #ff4900;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      spanText: '<3',
      createText: 'Use PC ',
      clickTexts: [
        'Use PC <3',
        "I'm serious",
        'Stop clicking on me !',
        "Ok. I'll give u chance :)",
        'Tap on me',
      ],
      innerHtml404: '<div class="phone-error-container"><h1 class ="phone-error">404</h1></div>',
      innerHtmlQuestion: '<h4 class="phone-error-lost-text">One more time <span>?</span></h4>',
    };
  },

  methods: {
    removeBodyContent() {
      document.body.innerHTML = '';
      document.body.innerHTML += this.innerHtml404;
      document.body.innerHTML += this.innerHtmlQuestion;
    },

    clickOnEgg(event) {
      if (event.target.textContent !== 'Tap on me') {
        const nextText = this.clickTexts.indexOf(event.target.textContent) + 1;
        event.target.textContent = this.clickTexts[nextText];
        return;
      }
      this.removeBodyContent();
    },
  },
};
</script>
