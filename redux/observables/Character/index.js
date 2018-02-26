import 'rxjs'
import { of } from 'rxjs/observable/of'
import ajax from 'universal-rx-request'

import {
  CHARACTER_FETCH,
  CHARACTER_FETCH_START,
  CHARACTER_FETCH_STOP,
  characterFetchFailure,
  characterFetchSuccess,
} from 'ducks/Character'

const host = process.env.SERVER_HOST
const call = process.env.SERVER_CALL
const port = process.env.PORT
const url = `${host}:${port}${call}`

export const characterFetchStartEpic = action$ =>
  action$
    .ofType(CHARACTER_FETCH_START)
    .mapTo({ type: CHARACTER_FETCH })

export const characterFetchEpic = (action$, store) => action$
  .ofType(CHARACTER_FETCH)
  .mergeMap(() =>
    ajax({
      url,
      method: 'post',
      data: {
        method: 'get',
        path: `/people/${store.getState().Character.id}`,
      },
    })
      .map(response => characterFetchSuccess(response.body))
      .catch(error => of(characterFetchFailure(error)))
      .takeUntil(action$.ofType(CHARACTER_FETCH_STOP)))
