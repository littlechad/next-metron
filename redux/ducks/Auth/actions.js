import * as types from './types'

export const auth = () => ({
  type: types.AUTH,
})

export const stopAuth = () => ({
  type: types.STOP_AUTH,
})

export const authSuccess = me => ({
  type: types.AUTH_SUCCESS,
  payload: { me },
})

export const authFailure = error => ({
  type: types.AUTH_FAILURE,
  payload: { error },
})

export const signout = () => ({
  type: types.SIGNOUT,
})

export const signoutSuccess = me => ({
  type: types.SIGNOUT_SUCCESS,
  payload: { me },
})
