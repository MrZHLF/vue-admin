import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});