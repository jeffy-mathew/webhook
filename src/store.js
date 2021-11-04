import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import requestsReducer from './reducers/requestsReducer'
import focusRequestReducer from './reducers/focusedRequestReducer'

const reducer = combineReducers({
  requests: requestsReducer,
  focusedRequestId: focusRequestReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store