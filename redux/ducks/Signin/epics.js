import 'rxjs'
import { of } from 'rxjs/observable/of'
import ajax from 'universal-rx-request'

import { setToken } from 'lib/auth'
import { auth } from 'ducks/Auth/actions'

import { signinSuccess, signinFailure } from './actions'
import * as types from './types'

const host = process.env.SERVER_HOST
const call = process.env.SERVER_CALL
const port = process.env.PORT
const url = `${host}:${port}${call}`

export const signinEpic = (action$, store) => action$
  .ofType(types.SIGNIN)
  .mergeMap(() => {
    const params = {
      url,
      method: 'post',
      data: {
        method: 'post',
        path: `/auth/${store.getState().Signin.type}`,
        payloads: store.getState().Signin.data,
      },
    }
    return ajax(params)
      .map(response => signinSuccess(response.body))
      .catch(error => of(signinFailure(error)))
      .takeUntil(action$.ofType(types.SIGNIN_STOP))
  })


export const signinSuccessEpic = (action$, store) =>
  action$
    .ofType(types.SIGNIN_SUCCESS)
    .mergeMap(() => {
      const signinResponse = store.getState().Signin.response
      const { name, refreshToken } = signinResponse
      if (refreshToken && name === 'TokenExpiredError') {
        const refreshParams = {
          url,
          method: 'post',
          data: {
            method: 'post',
            path: '/auth/refresh',
            payloads: { refreshToken },
          },
        }

        return ajax(refreshParams)
          .map((response) => {
            setToken(response.body.token)
            return auth()
          })
          .catch(error => of(signinFailure(error)))
      }
      setToken(signinResponse.auth.token)
      return of(auth())
    })
