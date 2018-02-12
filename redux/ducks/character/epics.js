import 'rxjs'
import { of } from 'rxjs/observable/of'
import { takeUntil, mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import ajax from 'universal-rx-request'

import * as actions from './actions'
import * as types from './types'

export const startFetchingCharactersEpic = action$ => action$.pipe(
  ofType(types.START_FETCHING_CHARACTERS),
  mergeMap(() => action$.pipe(
    mergeMap(() => of(actions.fetchCharacter())),
    takeUntil(ofType(types.STOP_FETCHING_CHARACTERS)),
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
  })
    .map(response => actions.fetchCharacterSuccess(
      response.body,
      true,
    ))
    .catch(error => of(actions.fetchCharacterFailure(
      error.response.body,
      false,
    )))),
  // mergeMap(() => of(actions.stopFetchingCharacters())),
)
