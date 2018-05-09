export const AUTH_ME = 'AUTH_ME'
export const AUTH_ME_CLEAN = 'AUTH_ME_CLEAN'
export const AUTH_ME_SUCCESS = 'AUTH_ME_SUCCESS'
export const AUTH_ME_FAILURE = 'AUTH_ME_FAILURE'

export const AUTH_SIGNOUT = 'AUTH_SIGNOUT'
export const AUTH_SIGNOUT_SUCCESS = 'AUTH_SIGNOUT_SUCCESS'
export const AUTH_SIGNOUT_FAILURE = 'AUTH_SIGNOUT_FAILURE'

export const AUTH_ME_DATA = 'AUTH_ME_DATA'

const INITIAL_STATE = {
  error: {},
  isAuthenticated: false,
  isError: false,
  isLoading: false,
  me: {
    auth: {
      token: '',
      refreshToken: '',
      expires: '',
    },
    email: '',
    username: '',
    profilePic: '',
    id: '',
  },
}

const Auth = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case AUTH_ME:
      return {
        ...state,
        isLoading: true,
      }

    case AUTH_ME_CLEAN:
      return {
        ...payload.state,
      }

    case AUTH_ME_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        me: payload.me,
      }

    case AUTH_ME_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: {
          message: payload.error.message,
        },
      }

    case AUTH_SIGNOUT:
      return {
        ...state,
        isAuthenticated: false,
      }

    case AUTH_SIGNOUT_SUCCESS:
      return {
        ...state,
      }

    case AUTH_SIGNOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: {
          message: payload.error.message,
        },
      }

    case AUTH_ME_DATA:
      return {
        ...state,
        isAuthenticated: true,
        me: payload.me,
      }

    default:
      return state
  }
}

export const authMe = () => ({
  type: AUTH_ME,
})

export const authMeClean = (state = INITIAL_STATE) => ({
  type: AUTH_ME_CLEAN,
  payload: { state },
})

export const authMeSuccess = me => ({
  type: AUTH_ME_SUCCESS,
  payload: { me },
})

export const authMeFailure = error => ({
  type: AUTH_ME_FAILURE,
  payload: { error },
})

export const authSignout = () => ({
  type: AUTH_SIGNOUT,
})

export const authSignoutSuccess = () => ({
  type: AUTH_SIGNOUT_SUCCESS,
})

export const authSignoutFailure = error => ({
  type: AUTH_SIGNOUT_FAILURE,
  payload: { error },
})

export const authSetMe = me => ({
  type: AUTH_ME_DATA,
  payload: { me },
})

export default Auth
