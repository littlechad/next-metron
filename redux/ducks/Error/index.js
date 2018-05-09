export const MESSAGE = 'MESSAGE'
export const REFERRER = 'REFERRER'

const INITIAL_STATE = {
  message: '',
  referrer: '',
}

const Error = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case MESSAGE:
      return {
        ...state,
        message: payload.message,
      }

    case REFERRER:
      return {
        ...state,
        referrer: payload.referrer,
      }

    default:
      return state
  }
}

export const setError = message => ({
  type: MESSAGE,
  payload: message,
})

export const setErrorClean = (message = INITIAL_STATE.message) => ({
  type: MESSAGE,
  payload: message,
})

export const setReferrer = referrer => ({
  type: REFERRER,
  payload: referrer,
})

export const setReferrerClean = (referrer = INITIAL_STATE.referrer) => ({
  type: REFERRER,
  payload: referrer,
})

export default Error
