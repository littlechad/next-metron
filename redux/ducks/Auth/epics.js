import 'rxjs'
import { of } from 'rxjs/observable/of'
import ajax from 'universal-rx-request'

import { isAuthenticated, getToken, removeToken } from 'lib/auth'

import { authSuccess, authFailure, signoutSuccess } from './actions'
import * as types from './types'

const host = process.env.SERVER_HOST
const call = process.env.SERVER_CALL
const port = process.env.PORT
const url = `${host}:${port}${call}`

export const authEpic = action$ => action$
  .ofType(types.AUTH)
  .mergeMap(() => {
    const params = {
      url,
      method: 'post',
      data: {
        method: 'post',
        path: '/auth/me',
        Authorization: isAuthenticated() ? getToken() : '',
      },
    }
    return ajax(params)
      .map((response) => {
        const {
          id, email, username, profilePic,
        } = response.body
        const { token, expires } = response.body.auth
        const me = {
          id, email, username, token, expires, profilePic,
        }
        return authSuccess(me)
      })
      .catch(error => of(authFailure(error)))
      .takeUntil(action$.ofType(types.STOP_AUTH))
  })

export const signoutEpic = action$ => action$
  .ofType(types.SIGNOUT)
  .mergeMap(() => {
    removeToken()
    return of(signoutSuccess())
  })
