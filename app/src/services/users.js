import axios from 'axios'
const baseURL = '/api/users'

export const createUser = async credentials => {
  const { data } = await axios.post(baseURL, credentials)
  return data
}
