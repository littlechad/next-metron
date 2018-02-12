import 'rxjs'
import { of } from 'rxjs/observable/of'
import { takeUntil, switchMap, mergeMap, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import ajax from 'universal-rx-request'

import * as actions from './actions'
import * as types from './types'

export const stopFetchingCharactersEpic = action$ =>
  action$
    .filter(action => action.type === types.PING)
    .mapTo(actions.stopFetchingCharacters())

export const fetchCharacterEpic = action$ => action$.pipe(
  ofType(types.FETCH_CHARACTER),
  switchMap(() => ajax({
    url: 'http://localhost:8010/call',
    method: 'post',
    data: {
      method: 'get',
      path: 'people/1',
    },
  })
    .map(response => actions.fetchCharacterSuccess(
      response.body,
      true,
    ))
    .catch(error => of(actions.fetchCharacterFailure(
      error.response.body,
      false,
    )))),
)
