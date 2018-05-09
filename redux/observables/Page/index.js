import { of } from 'rxjs/observable/of'
import ajax from 'universal-rx-request'

import { isAuthenticated, getToken } from 'lib/auth'

import {
  PAGE_FETCH,
  pageClean,
  pageFetchSuccess,
  pageFetchFailure,
} from 'ducks/Page'

const host = process.env.SERVER_HOST
const call = process.env.SERVER_CALL
const port = process.env.PORT
const env = process.env.NODE_ENV
const url = env === 'development' ? `${host}:${port}${call}` : `${host}${call}`

export const pageFetchEpic = (action$, store) => action$
  .ofType(PAGE_FETCH)
  .mergeMap(() => {
    const params = {
      url,
      method: 'post',
      data: {
        method: 'GET',
        path: `/page/${store.getState().Page.page.type}`,
        payloads: {
          qs: {},
        },
        Authorization: isAuthenticated() ? getToken() : '',
      },
    }
    return ajax(params)
      .concatMap(response => ([
        pageClean(),
        pageFetchSuccess(response.body),
      ]))
      .catch(error => of(pageFetchFailure(error)))
  })

export default pageFetchEpic
