import 'rxjs'
import { of } from 'rxjs/observable/of'
import { setToken } from 'lib/auth'
import { auth } from 'ducks/Auth/actions'

import { authData } from 'config/fakes'
import { signinSuccess } from './actions'
import * as types from './types'

export const signinEpic = action$ => action$
  .ofType(types.SIGNIN)
  .mergeMap(() => of(signinSuccess(authData)))

export const signinSuccessEpic = action$ =>
  action$
    .ofType(types.SIGNIN_SUCCESS)
    .mergeMap(() => {
      setToken(authData.token)
      return of(auth())
    })
