import requestsService from './../services/requests'
const requestsReducer = (state = [], action) => {
    switch(action.type) {
      case 'INIT_REQUESTS':
        return action.data
      default:
        return state
    }
  }

  export const initializeRequests = () => {
    return async dispatch => {
      const notes = await requestsService.getAll()
      dispatch({
        type: 'INIT_REQUESTS',
        data: notes,
      })
    }
  }
  
  
  const generateId = () =>
    Number((Math.random() * 1000000).toFixed(0))
  
  
  export default requestsReducer