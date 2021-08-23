import axios from 'axios'
const baseURL = '/api/login'

export const login = async credentials => {
  const { data } = await axios.post(baseURL, credentials)
  return data
}
