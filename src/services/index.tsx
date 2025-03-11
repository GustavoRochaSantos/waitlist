import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://bucketlisterswaitlist.vercel.app/api'
})

api.interceptors.request.use(async (config) => {

  return config
})

api.interceptors.response.use(async (response) => {
  console.log(response.status, response.data)
  return response
})