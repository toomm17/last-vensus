export default {
  state: {
    rouletteItems: {
      0: 'green-num',
      1: 'red-num',
      2: 'gray-num',
      3: 'red-num',
      4: 'gray-num',
      5: 'red-num',
      6: 'gray-num',
      7: 'red-num',
      8: 'gray-num',
      9: 'red-num',
      10: 'gray-num',
      11: 'gray-num',
      12: 'red-num',
      13: 'gray-num',
      14: 'red-num',
      15: 'gray-num',
      16: 'red-num',
      17: 'gray-num',
      18: 'red-num',
      19: 'red-num',
      20: 'gray-num',
      21: 'red-num',
      22: 'gray-num',
      23: 'red-num',
      24: 'gray-num',
      25: 'red-num',
      26: 'gray-num',
      27: 'red-num',
      28: 'gray-num',
      29: 'gray-num',
      30: 'red-num',
      31: 'gray-num',
      32: 'red-num',
      33: 'gray-num',
      34: 'red-num',
      35: 'gray-num',
      36: 'red-num',
    },
  },
  getters: {
    getRouletteItems(state) {
      return state.rouletteItems;
    },

    getColor: (state) => (number) => {
      return state.rouletteItems[number];
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};
