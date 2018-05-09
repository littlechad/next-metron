import { of } from 'rxjs/observable/of'
import ajax from 'universal-rx-request'

import { isAuthenticated, getToken } from 'lib/auth'

import {
  USER_EDIT,
  USER_FETCH,
  USER_USERNAME_VALIDATE,
  userClean,
  userEditSuccess,
  userEditFailure,
  userFetchSuccess,
  userFetchFailure,
  userUsernameValidateSuccess,
  userUsernameValidateFailure,
} from 'ducks/User'

const host = process.env.SERVER_HOST
const call = process.env.SERVER_CALL
const port = process.env.PORT
const env = process.env.NODE_ENV
const url = env === 'development' ? `${host}:${port}${call}` : `${host}${call}`

export const userFetchEpic = (action$, store) => action$
  .ofType(USER_FETCH)
  .mergeMap(() => {
    const params = {
      url,
      method: 'post',
      data: {
        method: 'get',
        path: `/user/${store.getState().User.username}`,
      },
    }

    if (isAuthenticated() && getToken()) {
      params.data.Authorization = getToken()
    }

    return ajax(params)
      .concatMap(response => ([
        userClean(),
        userFetchSuccess(response.body),
      ]))
      .catch(error => of(userFetchFailure(error)))
  })

export const userValidateUsernameEpic = (action$, store) => action$
  .ofType(USER_USERNAME_VALIDATE)
  .mergeMap(() => {
    const params = {
      url,
      method: 'post',
      data: {
        method: 'post',
        path: '/user/validate/username',
        payloads: {
          username: store.getState().User.user.username,
        },
        Authorization: isAuthenticated() ? getToken() : '',
      },
    }

    return ajax(params)
      .mergeMap(response => userUsernameValidateSuccess(response.body))
      .catch(error => of(userUsernameValidateFailure(error)))
  })

export const userEditEpic = (action$, store) => action$
  .ofType(USER_EDIT)
  .mergeMap(() => {
    const postData = {
      id: store.getState().User.user.id,
      username: store.getState().User.user.username,
      profilePic: store.getState().User.user.profilePic,
    }

    const params = {
      url,
      method: 'post',
      data: {
        method: 'put',
        path: `/user/${store.getState().User.user.id}`,
        payloads: postData,
        Authorization: isAuthenticated() ? getToken() : '',
      },
    }
    return ajax(params)
      .concatMap(response => [
        userClean(),
        userEditSuccess(response.body),
      ])
      .catch(error => of(userEditFailure(error)))
  })
