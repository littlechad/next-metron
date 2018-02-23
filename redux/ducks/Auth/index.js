import * as types from './types'

const INITIAL_STATE = {
  error: {},
  isAuthenticated: false,
  isError: false,
  isLoading: false,
  me: {
    id: '',
    email: '',
    username: '',
    profilePic: '',
    token: '',
    expires: 0,
  },
}

const Auth = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SIGNOUT:
      return {
        ...state,
        isAuthenticated: false,
      }

    case types.SIGNOUT_SUCCESS:
      return {
        ...state,
      }

    case types.AUTH:
      return {
        ...state,
        isLoading: true,
      }

    case types.STOP_AUTH:
      return {
        ...state,
        isLoading: false,
      }

    case types.AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        me: payload.me,
      }

    case types.AUTH_FAILURE:
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

export default Auth
