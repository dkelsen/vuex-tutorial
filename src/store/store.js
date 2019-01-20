import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload;
    },
    decrement(state, payload) {
      state.counter -= payload;
    }
  },
  actions: {
    increment(context, payload) {
      context.commit('increment', payload);
    },
    decrement(context, payload) {
      context.commit('decrement', payload);
    }
  },
  getters: {
    getCounter(state) {
      return state.counter;
    }
  }
});