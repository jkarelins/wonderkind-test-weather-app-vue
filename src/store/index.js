import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forecast: null,
    averageNext10Days: 0,
  },
  actions,
  mutations,
})
