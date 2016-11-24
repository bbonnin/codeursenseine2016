import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  talks: [],
  talk: null,
  speakers: []
}

export default new Vuex.Store({
  state, // application level state

  mutations,

  actions,

  getters // used to access data from Vue components

})
