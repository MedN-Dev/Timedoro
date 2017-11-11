/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    timer: {
      playing: false,
      pomodoro: 25 * 60,
      short: 5 * 60,
      long: 10 * 60,
      time: 25 * 60,
      obj: null,
    },
  },
  getters: {
    timer(state) {
      return state.timer;
    },
    pomodoro(state) {
      let minutes = parseInt(state.timer.time / 60, 10);
      let seconds = parseInt(state.timer.time % 60, 10);

      minutes = minutes < 10 ? '00' : minutes;
      seconds = seconds < 10 ? '00' : seconds;

      return `${minutes}:${seconds}`;
    },
  },
  mutations: {
    startTime(state) {
      if (state.timer.playing === false) {
        state.timer.playing = true;
        state.timer.obj = setInterval(() => {
          if (state.timer.time <= 0) {
            state.timer.time = 0;
          } else {
            state.timer.time -= 1;
          }
        }, 1000);
      } else {
        state.timer.playing = false;
        clearInterval(state.timer.obj);
      }
    },
    reset(state) {
      state.timer.playing = false;
      state.timer.time = state.timer.pomodoro;
      clearInterval(state.timer.obj);
    },
  },
});

export default store;
