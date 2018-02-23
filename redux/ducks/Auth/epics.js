import 'rxjs'
import { of } from 'rxjs/observable/of'
import { removeToken } from 'lib/auth'

import { meData } from 'config/fakes'

import { authSuccess, signoutSuccess } from './actions'
import * as types from './types'

export const authEpic = action$ => action$
  .ofType(types.AUTH)
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
  .ofType(types.SIGNOUT)
  .mergeMap(() => {
    removeToken()
    return of(signoutSuccess())
  })
