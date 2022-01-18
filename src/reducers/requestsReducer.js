import requestsService from './../services/requests'
const requestsReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_REQUESTS':
      return action.data
    default:
      return state
  }
}

export const initializeRequests = (id) => {
  return async dispatch => {
    const requests = await requestsService.getAll(id)
    dispatch({
      type: 'INIT_REQUESTS',
      data: requests,
    })
  }
}


export default requestsReducer