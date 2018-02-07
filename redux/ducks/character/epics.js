import { interval } from 'rxjs/observable/interval'
import { of } from 'rxjs/observable/of'
import { takeUntil, mergeMap, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import ajax from 'universal-rx-request'

import * as actions from './actions'
import * as types from './types'

export const fetchUserEpic = (action$, isServer) => action$.pipe(
  ofType(types.START_FETCHING_CHARACTERS),
  mergeMap(() => interval(10000).pipe(
    mergeMap(() =>
      of(actions.fetchCharacter({
        isServer,
      }))),
    takeUntil(action$.ofType(types.STOP_FETCHING_CHARACTERS)),
  )),
)


export const fetchCharacterEpic = (action$, id) => action$.pipe(
  ofType(types.FETCH_CHARACTER),
  mergeMap(() => ajax({
    url: 'http://localhost:8010/call',
    method: 'post',
    data: {
      method: 'get',
      path: `people/${id}`,
    },
  }).pipe(
    mergeMap(response => of(actions.fetchCharacterSuccess(
      response.body,
      true,
    ))),
    catchError(error => of(actions.fetchCharacterFailure(
      error.response.body,
      false,
    ))),
  )),
)
