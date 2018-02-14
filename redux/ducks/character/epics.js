import 'rxjs'
import { of } from 'rxjs/observable/of'
import ajax from 'universal-rx-request'

import { fetchCharacterSuccess, fetchCharacterFailure } from './actions'
import * as types from './types'

export const startFetchingCharactersEpic = action$ =>
  action$
    .ofType(types.START_FETCHING_CHARACTERS)
    .mapTo({ type: types.FETCH_CHARACTER })

export const fetchCharacterEpic = (action$, store) => action$
  .ofType(types.FETCH_CHARACTER)
  .mergeMap(() =>
    ajax({
      url: 'http://localhost:8010/call',
      method: 'post',
      data: {
        method: 'get',
        path: `people/${store.getState().Character.id}`,
      },
    })
      .map(response => fetchCharacterSuccess(response.body))
      .catch(error => of(fetchCharacterFailure(error.response.body)))
      .takeUntil(action$.ofType(types.STOP_FETCHING_CHARACTERS)))
