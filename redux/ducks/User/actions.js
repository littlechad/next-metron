import * as types from './types'

export const userSetUsername = username => ({
  type: types.USER_USERNAME,
  payload: { username },
})

export const userSetUsernameSuccess = () => ({
  type: types.USER_USERNAME_SUCCESS,
})

export const userFetch = () => ({
  type: types.USER_FETCH,
})

export const userFetchStop = () => ({
  type: types.USER_FETCH_STOP,
})

export const userFetchSuccess = user => ({
  type: types.USER_FETCH_SUCCESS,
  payload: { user },
})

export const userFetchFailure = error => ({
  type: types.USER_FETCH_FAILURE,
  payload: { error },
})
