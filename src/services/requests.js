import axios from 'axios'

const baseUrl = 'https://178fb235-c752-494b-8bd5-97f48179e8fa.mock.pstmn.io/requests'

const getAll = async (id) => {
  const response = await axios.get(baseUrl)
  return response.data
}

const service = {
  getAll
}

export default service