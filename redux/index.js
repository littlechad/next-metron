import 'rxjs'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic, rootReducer } from './modules/root'

const epicMiddleware = createEpicMiddleware(rootEpic)

export default function initStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      epicMiddleware,
      thunkMiddleware,
      createLogger({ collapsed: true }),
    ),
  )
  return store
}
