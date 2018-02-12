import 'rxjs'

import * as actions from './actions'
import * as types from './types'

export const pingEpic = action$ =>
  action$
    .filter(action => action.type === types.PING)
    .mapTo(actions.ping())

export const pongEpic = action$ =>
  action$
    .filter(action => action.type === types.PONG)
    .mapTo(actions.pong())
