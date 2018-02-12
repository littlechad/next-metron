import 'rxjs'
import { of, ofType, switchMap, catchError, mergeMap } from 'rxjs/observable/of'
import ajax from 'universal-rx-request'

import * as actions from './actions'
import * as types from './types'

export const test = () => {}

// export const loadCharacterEpic = (action$) => {
//   console.log('action$', action$)
//   return action$.pipe(
//     ofType(types.FETCH_CHARACTER),
//     switchMap((data) => {
//       console.log('loadCharacterEpic', data)
//       return ajax({
//         url: 'http://localhost:8010/call',
//         method: 'post',
//         data: {
//           method: 'get',
//           path: 'people/1',
//         },
//       })
//         .map(response => actions.fetchCharacterSuccess(
//           response.body,
//           true,
//         ))
//         .catch(error => of(actions.fetchCharacterFailure(
//           error.response.body,
//           false,
//         )))
//     }),
//   )
// }

export const loadCharacterEpic = (action$, store) =>
  action$.pipe(
    ofType(types.FETCH_CHARACTER),
    mergeMap(() =>
      ajax({
        url: `https://swapi.co/api/people/${store.getState().nextCharacterId}`,
      }).pipe(
        mergeMap(response =>
          of(actions.fetchCharacterSuccess(
            response.body,
            store.getState().isServer,
          ))),
        catchError(error =>
          of(actions.fetchCharacterFailure(
            error.response.body,
            store.getState().isServer,
          ))),
      )),
  )
