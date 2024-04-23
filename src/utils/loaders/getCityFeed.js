import axios from 'axios'

export async function getCityFeed(url) {
  const response = await axios.get(`${url}`)
  return response.data
}
