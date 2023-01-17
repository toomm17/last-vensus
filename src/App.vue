<template>
  <router-view />
</template>

<script>
import AppHeader from './components/header/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
$font-path: './assets/fonts/CeraPro-Medium.eot';

@font-face {
  font-family: 'CeraPro';
  src: local('☺'), url('./assets/fonts/CeraPro-Medium.woff') format('woff'),
    url('./assets/fonts/CeraPro-Medium.ttf') format('truetype'),
    url('./assets/fonts/CeraPro-Medium.svg') format('svg');
  font-weight: 500;
  font-style: normal;
}

#app {
  font-family: Poppins, CeraPro, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background-color: #000000;
  color: #ffffff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 500;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-size: inherit;
}

input,
button {
  border: none;
  font-family: inherit;
  font-size: inherit;
}

input:focus,
button:focus {
  outline: none;
}

ul,
li {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

html,
body {
  font-family: 'Poppins', sans-serif;
  height: 100%;
  width: 100%;
}

.container {
  max-width: 1512px;

  @media screen and (max-width: 1480px) {
    max-width: 1300px;
  }

  @media screen and (max-width: 1160px) {
    max-width: 800px;
  }

  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

svg,
path {
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
}

button,
div {
  -moz-user-select: -moz-none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
