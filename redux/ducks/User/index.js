export const USER_USERNAME = 'USER_USERNAME'
export const USER_USERNAME_SUCCESS = 'USER_USERNAME_SUCCESS'
export const USER_FETCH = 'USER_FETCH'
export const USER_FETCH_STOP = 'USER_FETCH_STOP'
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE'

const INITIAL_STATE = {
  username: '',
  error: {},
  isError: false,
  isLoading: false,
  user: {},
}

const User = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USER_USERNAME:
      return {
        ...state,
        username: payload.username,
      }

    case USER_FETCH:
      return {
        ...state,
        isLoading: true,
      }

    case USER_FETCH_STOP:
      return {
        ...state,
        isLoading: false,
      }

    case USER_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
      }

    case USER_FETCH_FAILURE:
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

export const userSetUsername = username => ({
  type: USER_USERNAME,
  payload: { username },
})

export const userSetUsernameSuccess = () => ({
  type: USER_USERNAME_SUCCESS,
})

export const userFetch = () => ({
  type: USER_FETCH,
})

export const userFetchStop = () => ({
  type: USER_FETCH_STOP,
})

export const userFetchSuccess = user => ({
  type: USER_FETCH_SUCCESS,
  payload: { user },
})

export const userFetchFailure = error => ({
  type: USER_FETCH_FAILURE,
  payload: { error },
})

export default User
