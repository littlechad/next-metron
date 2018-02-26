export const CHARACTER_FETCH = 'CHARACTER_FETCH'
export const CHARACTER_FETCH_SUCCESS = 'CHARACTER_FETCH_SUCCESS'
export const CHARACTER_FETCH_FAILURE = 'CHARACTER_FETCH_FAILURE'
export const CHARACTER_FETCH_START = 'CHARACTER_FETCH_START'
export const CHARACTER_FETCH_STOP = 'CHARACTER_FETCH_STOP'

const INITIAL_STATE = {
  data: {},
  error: {},
  id: 1,
}

const Character = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHARACTER_FETCH_SUCCESS:
      return {
        ...state,
        data: payload.data,
        id: state.id + 1,
      }

    case CHARACTER_FETCH_FAILURE:
      return {
        ...state,
        error: payload.error,
      }
    default:
      return state
  }
}

export const characterFetchStart = id => ({
  type: CHARACTER_FETCH_START,
  payload: { id },
})

export const characterFetchStop = () => ({
  type: CHARACTER_FETCH_STOP,
})

export const characterFetch = () => ({
  type: CHARACTER_FETCH,
})

export const characterFetchSuccess = data => ({
  type: CHARACTER_FETCH_SUCCESS,
  payload: { data },
})

export const characterFetchFailure = error => ({
  type: CHARACTER_FETCH_FAILURE,
  payload: { error },
})

export default Character
