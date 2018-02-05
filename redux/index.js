import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import reducers from './reducers'
import { rootEpic } from './epics'

export default function initStore(initialState) {
  const epicMiddleware = createEpicMiddleware(rootEpic)
  const logger = createLogger({ collapsed: true })
  const reduxMiddleware = applyMiddleware(thunkMiddleware, epicMiddleware, logger)

  return createStore(reducers, initialState, reduxMiddleware)
}
