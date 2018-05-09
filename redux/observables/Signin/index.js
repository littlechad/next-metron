import { of } from 'rxjs/observable/of'
import ajax from 'universal-rx-request'

import { Router } from 'config/routes'

import * as auth from 'lib/auth'

import { authSetMe } from 'ducks/Auth'
import {
  SIGNIN,
  SIGNIN_SUCCESS,
  signinSuccess,
  signinFailure,
} from 'ducks/Signin'

const host = process.env.SERVER_HOST
const call = process.env.SERVER_CALL
const port = process.env.PORT
const env = process.env.NODE_ENV
const url = env === 'development' ? `${host}:${port}${call}` : `${host}${call}`

export const signinEpic = (action$, store) => action$
  .ofType(SIGNIN)
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
      .concatMap((response) => {
        const { name, refreshToken } = response.body
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
            .concatMap((refreshResponse) => {
              const { body } = refreshResponse
              auth.setToken(body.auth.token)

              const me = {
                ...body.auth,
                email: body.email,
                username: body.username,
                profilePic: body.profilePic,
                id: body.id,
              }
              return [
                authSetMe(me),
                signinSuccess(),
              ]
            })
            .catch(error => of(signinFailure(error)))
        }
        const { body } = response
        const me = {
          ...body.auth,
          email: body.email,
          username: body.username,
          profilePic: body.profilePic,
          id: body.id,
        }
        auth.setToken(body.auth.token)
        return [
          authSetMe(me),
          signinSuccess(),
        ]
      })
      .catch(error => of(signinFailure(error)))
  })

export const signinSuccessEpic = (action$, store) => action$
  .ofType(SIGNIN_SUCCESS)
  .mapTo(() => {
    const route = store.getState().Error.referrer !== ''
      ? store.getState().Error.referrer
      : '/'
    return Router.pushRoute(route)
  })
