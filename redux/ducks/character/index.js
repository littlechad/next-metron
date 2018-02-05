import * as types from './types'

const INITIAL_STATE = {
  data: {},
  error: null,
  isFetchedOnServer: false,
  nextCharacterId: 1,
}

export default function character(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        data: payload.response,
        isFetchedOnServer: payload.isServer,
        nextCharacterId: state.nextCharacterId + 1,
      }
    case types.FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        error: payload.error,
        isFetchedOnServer: payload.isServer,
      }
    default:
      return state
  }
}
