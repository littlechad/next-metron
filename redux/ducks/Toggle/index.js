import * as types from './types'

const INITIAL_STATE = {
  name: '',
  open: false,
  params: {},
}

const Toggle = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.DATA:
      return {
        ...state,
        name: payload.name,
        open: payload.open,
      }

    case types.PARAMS:
      return {
        ...state,
        params: payload.params,
      }

    default:
      return state
  }
}

export default Toggle
