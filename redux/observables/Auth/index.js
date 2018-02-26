import 'rxjs'
import { of } from 'rxjs/observable/of'
import { removeToken } from 'lib/auth'

import { meData } from 'config/fakes'

import {
  AUTH,
  SIGNOUT,
  authSuccess,
  signoutSuccess,
} from 'ducks/Auth'

export const authEpic = action$ => action$
  .ofType(AUTH)
  .mergeMap(() => {
    const {
      id, email, username, profilePic,
    } = meData
    const { token, expires } = meData.auth
    const me = {
      id, email, username, token, expires, profilePic,
    }
    return of(authSuccess(me))
  })

export const signoutEpic = action$ => action$
  .ofType(SIGNOUT)
  .mergeMap(() => {
    removeToken()
    return of(signoutSuccess())
  })
