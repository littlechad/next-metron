import * as types from './types'

export const toggle = data => ({
  type: types.DATA,
  payload: data,
})

export const setParams = params => ({
  type: types.PARAMS,
  payload: params,
})
