import 'rxjs'
import { of } from 'rxjs/observable/of'
import { setToken } from 'lib/auth'

import { authData } from 'config/fakes'

import { auth } from 'ducks/Auth'
import {
  SIGNIN,
  SIGNIN_SUCCESS,
  signinSuccess,
} from 'ducks/Signin'

export const signinEpic = action$ => action$
  .ofType(SIGNIN)
  .mergeMap(() => of(signinSuccess(authData)))

export const signinSuccessEpic = action$ =>
  action$
    .ofType(SIGNIN_SUCCESS)
    .mergeMap(() => {
      setToken(authData.token)
      return of(auth())
    })
