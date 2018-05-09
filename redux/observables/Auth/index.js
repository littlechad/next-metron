import { of } from 'rxjs/observable/of'
import ajax from 'universal-rx-request'

import { isAuthenticated, getToken, removeToken, setToken } from 'lib/auth'

import {
  AUTH_ME,
  AUTH_SIGNOUT,
  authMeSuccess,
  authMeFailure,
  authSignoutSuccess,
} from 'ducks/Auth'

const host = process.env.SERVER_HOST
const call = process.env.SERVER_CALL
const port = process.env.PORT
const env = process.env.NODE_ENV
const url = env === 'development' ? `${host}:${port}${call}` : `${host}${call}`

export const authMeEpic = action$ => action$
  .ofType(AUTH_ME)
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
      .mergeMap((response) => {
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
            .mergeMap((refreshResponse) => {
              const { body } = refreshResponse
              setToken(body.auth.token)

              const me = {
                ...body.auth,
                followers: body.followers,
                followings: body.followings,
                email: body.email,
                username: body.username,
                profilePic: body.profilePic,
                id: body.id,
              }
              return of(authMeSuccess(me))
            })
            .catch(error => of(authMeFailure(error)))
        }

        const { body } = response
        const me = {
          ...body.auth,
          email: body.email,
          followers: body.followers,
          followings: body.followings,
          username: body.username,
          profilePic: body.profilePic,
          id: body.id,
        }
        setToken(body.auth.token)
        return of(authMeSuccess(me))
      })
      .catch(error => of(authMeFailure(error)))
  })

export const authSignoutEpic = action$ => action$
  .ofType(AUTH_SIGNOUT)
  .map(() => {
    removeToken()
    return authSignoutSuccess()
  })
