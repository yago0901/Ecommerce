import axios from 'axios'

export const URL_API = axios.create({
  baseURL: 'http://localhost:9000'
})