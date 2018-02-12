import * as types from './types'

const INITIAL_STATE = {
  data: {},
  error: {},
  nextCharacterId: 1,
  status: false,
}

const Character = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.START_FETCHING_CHARACTERS:
      return {
        ...state,
        status: true,
      }
    case types.STOP_FETCHING_CHARACTERS:
      return {
        ...state,
        status: false,
      }
    case types.FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        data: payload.response,
        nextCharacterId: state.nextCharacterId + 1,
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
