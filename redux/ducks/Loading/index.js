const LOADING = 'LOADING'

const INITIAL_STATE = {
  isLoading: false,
}

const Loading = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { isLoading: payload.isLoading }

    default:
      return state
  }
}


export const loading = isLoading => ({
  type: LOADING,
  payload: { isLoading },
})


export default Loading
