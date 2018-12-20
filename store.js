import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createMiddleware } from 'redux-api-middleware'

import fetch from '~/request/fetch'
import reducers from '~/reducers'

const bindMiddleware = middlewares => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middlewares))
  }
  return applyMiddleware(...middlewares)
}

function configureStore (initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    bindMiddleware([ createMiddleware({ fetch }), thunk ])
  )

  return store
}

export default configureStore