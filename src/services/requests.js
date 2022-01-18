import axios from 'axios'

const baseUrl = 'http://localhost:9090/requests?webhook_id='

const getAll = async (id) => {
  const response = await axios.get(baseUrl + id)
  return response.data.data
}

const service = {
  getAll
}

export default service