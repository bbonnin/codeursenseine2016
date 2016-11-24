import * as types from './mutation-types'

export default {
  [types.FETCH_TALKS] (state, talks) {
    state.talks = talks
  },

  [types.GET_TALK] (state, talk) {
    state.talk = talk
  },

  [types.FETCH_SPEAKERS] (state, speakers) {
    state.speakers = speakers
  }
}
