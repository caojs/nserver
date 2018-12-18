import { createStore, applyMiddleware } from 'redux'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const rootReducer = (state, action) => state;

function configureStore (initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([])
  )

  return store
}

export default configureStore