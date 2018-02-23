import * as types from './types'

export const signin = data => ({
  type: types.SIGNIN,
  payload: { data },
})

export const signinStop = () => ({
  type: types.SIGNIN_STOP,
})

export const signinSuccess = response => ({
  type: types.SIGNIN_SUCCESS,
  payload: { response },
})

export const signinFailure = error => ({
  type: types.SIGNIN_FAILURE,
  payload: { error },
})

export const signinSetType = type => ({
  type: types.SIGNIN_TYPE,
  payload: { type },
})

export const signinSetIsEligible = isSigninEligible => ({
  type: types.SIGNIN_IS_ELIGIBLE,
  payload: isSigninEligible,
})
