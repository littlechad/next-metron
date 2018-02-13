import 'rxjs'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import rootEpics from './root/epics'
import rootReducers from './root/reducers'

export default function initStore(initialState) {
  const epicMiddleware = createEpicMiddleware(rootEpics)
  const logger = createLogger({ collapsed: true })
  const middlewares = applyMiddleware(thunkMiddleware, epicMiddleware, logger)

  return createStore(
    rootReducers,
    initialState,
    middlewares,
  )
}
