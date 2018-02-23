import * as types from './types'

const INITIAL_STATE = {
  username: '',
  error: {},
  isError: false,
  isLoading: false,
  user: {},
}

const User = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.USER_USERNAME:
      return {
        ...state,
        username: payload.username,
      }

    case types.USER_FETCH:
      return {
        ...state,
        isLoading: true,
      }

    case types.USER_FETCH_STOP:
      return {
        ...state,
        isLoading: false,
      }

    case types.USER_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
      }

    case types.USER_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: {
          message: payload.error.message,
        },
      }

    default:
      return state
  }
}

export default User
