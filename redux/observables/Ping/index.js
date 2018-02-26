import 'rxjs'

import { PING, PONG } from 'ducks/Ping'

const pingEpic = action$ =>
  action$
    .ofType(PING)
    .delay(1000)
    .mapTo({ type: PONG })

export default pingEpic
