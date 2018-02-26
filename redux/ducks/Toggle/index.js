export const DATA = 'DATA'
export const PARAMS = 'PARAMS'

const INITIAL_STATE = {
  name: '',
  open: false,
  params: {},
}

const Toggle = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DATA:
      return {
        ...state,
        name: payload.name,
        open: payload.open,
      }

    case PARAMS:
      return {
        ...state,
        params: payload.params,
      }

    default:
      return state
  }
}

export const toggle = data => ({
  type: DATA,
  payload: data,
})

export const setParams = params => ({
  type: PARAMS,
  payload: params,
})

export default Toggle
