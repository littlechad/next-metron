import { interval } from 'rxjs/observable/interval'
import { of } from 'rxjs/observable/of'
import { takeUntil, mergeMap, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import ajax from 'universal-rx-request'

import * as actions from './actions'
import * as types from './types'

export const fetchUserEpic = (action$, store) => action$.pipe(
  ofType(types.START_FETCHING_CHARACTERS),
  mergeMap(() => interval(3000).pipe(
    mergeMap(() =>
      of(actions.fetchCharacter({
        isServer: store.getState().character.isFetchedOnServer,
      }))),
    takeUntil(action$.ofType(types.STOP_FETCHING_CHARACTERS)),
  )),
)


export const fetchCharacterEpic = (action$, store) => action$.pipe(
  ofType(types.FETCH_CHARACTER),
  mergeMap(() => ajax({
    url: `https://swapi.co/api/people/${store.getState().character.nextCharacterId}`,
  }).pipe(
    mergeMap(response =>
      of(actions.fetchCharacterSuccess(
        response.body,
        true,
      ))),
    catchError(error =>
      of(actions.fetchCharacterFailure(
        error.response.body,
        false,
      ))),
  )),
)
