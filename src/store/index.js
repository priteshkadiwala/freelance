import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: 'en',
    posts: [],
    featureList: '',
    typeList: '',
    url: '',
  },
  getters: {
    lang(state) {
      return state.lang;
    },
    posts(state) {
      return state.posts;
    },
    featureList(state) {
      return state.featureList;
    },
    typeList(state) {
      return state.typeList;
    },
    url(state) {
      return state.url;
    },
  },
  mutations: {
    SET_DATA: (state, resp) => {
      state.lang = resp.data.lang;
      state.posts = resp.data.results.data.data;
      state.featureList = resp.data.featureList;
      state.typeList = resp.data.typeList;
      state.url = resp.data.results.path;
    },
    SET_LANG: (state, resp) => {
      state.lang = resp;
    },
  },
  actions: {
    GET_DATA({ commit }) {
      axios.get('https://dashu.xsrv.jp/api/').then((resp) => {
        console.log(resp);
        commit('SET_DATA', resp);
      });
    },
  },
  modules: {},
});
