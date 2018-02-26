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

/**
 * On a real scenario, we are assuming that below's epic will do a GET request to an API
 * that will sign, verify and return a User object
 * You would probably write something like
 * export const authEpic = action$ => action$
   .ofType(AUTH)
   .mergeMap(() => {
     const params = {
       url,
       method: 'post',
       data: {
          method: 'post',
          path: '/your/loggenin/user/endpoint',
          //to also sent a `headers/Authorization`
          Authorization: isAuthenticated() ? getToken() : '',
       },
     }
     return ajax(params)
       .map((response) => {
         // const me = // do something with response
         return authSuccess(me) // dipatch to update the state
       })
       .catch(error => of(authFailure(error)))
   })
  */

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
