const focusRequestReducer = (state = '', action) => {
  switch (action.type) {
    case 'FOCUS':
      return action.requestId
    default:
      return state
  }
}


export const focusChange = requestId => {
  return {
    type: 'FOCUS',
    requestId,
  }
}

export default focusRequestReducer