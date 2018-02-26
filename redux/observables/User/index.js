import 'rxjs'
import { of } from 'rxjs/observable/of'
import ajax from 'universal-rx-request'

import {
  USER_USERNAME,
  USER_USERNAME_SUCCESS,
  USER_FETCH_STOP,
  userFetchSuccess,
  userFetchFailure,
} from 'ducks/User'

const host = process.env.SERVER_HOST
const call = process.env.SERVER_CALL
const port = process.env.PORT
const url = `${host}:${port}${call}`

export const userSetUsernameEpic = action$ => action$
  .ofType(USER_USERNAME)
  .mapTo({ type: USER_USERNAME_SUCCESS })

export const userFetchEpic = (action$, store) => action$
  .ofType(USER_USERNAME_SUCCESS)
  .mergeMap(() => {
    const params = {
      url,
      method: 'post',
      data: {
        method: 'get',
        path: `/user/${store.getState().User.username}`,
      },
    }
    return ajax(params)
      .map(response => userFetchSuccess(response.body))
      .catch(error => of(userFetchFailure(error)))
      .takeUntil(action$.ofType(USER_FETCH_STOP))
  })
