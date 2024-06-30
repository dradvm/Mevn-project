import axios from 'axios'

const createAxios = (route = "", contentType = 'application/json') => axios.create({
  baseURL: `http://localhost:3000${route}`,
  timeout: 10000,
  headers: {
    'Content-Type': contentType
  }
})
export default createAxios
