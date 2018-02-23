import * as types from './types'

const INITIAL_STATE = {
  data: {},
  error: {
    message: '',
  },
  isError: false,
  isLoading: false,
  isSigninEligible: true,
  response: {},
  type: '',
}

const Signin = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SIGNIN_IS_ELIGIBLE:
      return {
        ...state,
        isSigninEligible: payload.isSigninEligible,
      }

    case types.SIGNIN_TYPE:
      return {
        ...state,
        type: payload.type,
      }

    case types.SIGNIN:
      return {
        ...state,
        isLoading: true,
        data: payload.data,
      }

    case types.SIGNIN_STOP:
      return {
        ...state,
        isLoading: false,
      }

    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: payload.response,
      }

    case types.SIGNIN_FAILURE:
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

export default Signin
