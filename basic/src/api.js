import axios from 'axios'

export const fetchTalks = () => axios.get('/api/talks')

export const fetchSpeakers = () => axios.get('/api/speakers')
