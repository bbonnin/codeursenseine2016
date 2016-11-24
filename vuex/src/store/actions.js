import * as api from '../api'
import * as types from './mutation-types'

export const fetchTalks = ({ commit }) => {
  api.fetchTalks()
    .then((resp) => commit(types.FETCH_TALKS, resp.data.talks))
}

export const getTalk = ({ commit }, talkId) => {
  api.getTalk(talkId)
    .then((talk) => commit(types.GET_TALK, talk))
}

export const fetchSpeakers = ({ commit }) => {
  api.fetchSpeakers()
    .then((resp) => commit(types.FETCH_SPEAKERS, resp.data.speakers))
}
