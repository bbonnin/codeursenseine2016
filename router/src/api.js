import axios from 'axios'

export const fetchTalks = () => axios.get('/api/talks')

export const getTalk = (id) => {
  return fetchTalks()
  .then((resp) => {
    let talk = resp.data.talks[id]
    return Promise.resolve(talk)
  })
}

export const fetchSpeakers = () => axios.get('/api/speakers')
