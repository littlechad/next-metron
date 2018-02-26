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


/**
 * On a real scenario, we are assuming that below's epic will do a GET request to an API
 * that will sign, verify and return a Valid Token
 * You would probably write something like
 * export const signinEpic = (action$, store) => action$
   .ofType(SIGNIN)
   .mergeMap(() => {
     const params = {
       url,
       method: 'post',
       data: {
         method: 'post',
         path: `/your/signin/endpoint`,
         payloads: { somePayload },
       },
     }
     return ajax(params)
       .map((response) => {
         // const data = // do something with response
         return signinSuccess(data) // dipatch to update the state
       })
       .catch(error => of(signinFailure(error)))
       .takeUntil(action$.ofType(SIGNIN_STOP))
   })
  */


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
