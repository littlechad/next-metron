import * as types from './types'

const INITIAL_STATE = {
  data: {},
  error: {},
  id: 1,
}

const Character = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        data: payload.response,
        id: state.id + 1,
      }
    case types.FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        error: payload.error,
      }
    default:
      return state
  }
}

export default Character
