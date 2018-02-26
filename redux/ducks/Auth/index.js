export const START_AUTH = 'START_AUTH'
export const STOP_AUTH = 'STOP_AUTH'
export const AUTH = 'AUTH'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'
export const ME = 'ME'
export const SIGNOUT = 'SIGNOUT'
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'

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
    case SIGNOUT:
      return {
        ...state,
        isAuthenticated: false,
      }

    case SIGNOUT_SUCCESS:
      return {
        ...state,
      }

    case AUTH:
      return {
        ...state,
        isLoading: true,
      }

    case STOP_AUTH:
      return {
        ...state,
        isLoading: false,
      }

    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        me: payload.me,
      }

    case AUTH_FAILURE:
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

export const auth = () => ({
  type: AUTH,
})

export const stopAuth = () => ({
  type: STOP_AUTH,
})

export const authSuccess = me => ({
  type: AUTH_SUCCESS,
  payload: { me },
})

export const authFailure = error => ({
  type: AUTH_FAILURE,
  payload: { error },
})

export const signout = () => ({
  type: SIGNOUT,
})

export const signoutSuccess = me => ({
  type: SIGNOUT_SUCCESS,
  payload: { me },
})

export default Auth
