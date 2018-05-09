export const USER = 'USER'

export const USER_EDIT = 'USER_EDIT'
export const USER_EDIT_SUCCESS = 'USER_EDIT_SUCCESS'
export const USER_EDIT_FAILURE = 'USER_EDIT_FAILURE'

export const USER_SET_USERNAME_VALIDATE = 'USER_SET_USERNAME_VALIDATE'
export const USER_USERNAME_VALIDATE = 'USER_USERNAME_VALIDATE'
export const USER_USERNAME_VALIDATE_SUCCESS = 'USER_USERNAME_VALIDATE_SUCCESS'
export const USER_USERNAME_VALIDATE_FAILURE = 'USER_USERNAME_VALIDATE_FAILURE'

export const USER_CLEAN = 'USER_CLEAN'
export const USER_FETCH = 'USER_FETCH'
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE'

const INITIAL_STATE = {
  username: '',
  error: {},
  isError: false,
  isLoading: false,
  isUsernameValid: false,
  user: {
    id: '',
    email: '',
    username: '',
    isVerified: false,
    isBetaUser: false,
    isBusinessUser: false,
    profilePic: '',
  },
}

const User = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USER:
      return {
        ...state,
        user: {
          ...state.user,
          [payload.key]: payload.value,
        },
      }

    case USER_SET_USERNAME_VALIDATE:
      return {
        ...state,
        user: {
          ...state.user,
          username: payload.username,
        },
      }

    case USER_USERNAME_VALIDATE:
      return {
        ...state,
        isLoading: true,
      }

    case USER_USERNAME_VALIDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isUsernameValid: payload.isUsernameValid,
      }

    case USER_USERNAME_VALIDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: {
          message: payload.error.message,
        },
      }

    case USER_CLEAN:
      return {
        ...payload.state,
      }

    case USER_FETCH:
      return {
        ...state,
        isLoading: true,
        username: payload.username,
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

    case USER_EDIT:
      return {
        ...state,
        isLoading: true,
      }

    case USER_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
      }

    case USER_EDIT_FAILURE:
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

export const userSet = (key, value) => ({
  type: USER,
  payload: {
    key,
    value,
  },
})

export const userSetUsernameValidate = username => ({
  type: USER_SET_USERNAME_VALIDATE,
  payload: { username },
})

export const userUsernameValidate = () => ({
  type: USER_USERNAME_VALIDATE,
})

export const userUsernameValidateSuccess = isUsernameValid => ({
  type: USER_USERNAME_VALIDATE_SUCCESS,
  payload: { isUsernameValid },
})

export const userUsernameValidateFailure = error => ({
  type: USER_USERNAME_VALIDATE_FAILURE,
  payload: { error },
})

export const userClean = (state = INITIAL_STATE) => ({
  type: USER_CLEAN,
  payload: { state },
})

export const userFetch = username => ({
  type: USER_FETCH,
  payload: { username },
})

export const userFetchSuccess = user => ({
  type: USER_FETCH_SUCCESS,
  payload: { user },
})

export const userFetchFailure = error => ({
  type: USER_FETCH_FAILURE,
  payload: { error },
})

export const userEdit = () => ({
  type: USER_EDIT,
})

export const userEditSuccess = user => ({
  type: USER_EDIT_SUCCESS,
  payload: { user },
})

export const userEditFailure = error => ({
  type: USER_EDIT_FAILURE,
  payload: { error },
})

export default User
