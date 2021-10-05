import axios from 'axios'

const apiClient = axios.create({
  //baseURL: 'https://my-json-server.typicode.com/Manannan297/real-world-vue',
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) { // new post request
    return apiClient.post('/events', event)
  }
}