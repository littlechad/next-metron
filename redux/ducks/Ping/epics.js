import 'rxjs'

import * as types from './types'

const pingEpic = action$ =>
  action$
    .ofType(types.PING)
    .delay(1000)
    .mapTo({ type: types.PONG })

export default pingEpic
