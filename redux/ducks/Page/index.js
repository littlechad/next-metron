export const PAGE = 'PAGE'

export const PAGE_FETCH = 'PAGE_FETCH'
export const PAGE_FETCH_SUCCESS = 'PAGE_FETCH_SUCCESS'
export const PAGE_FETCH_FAILURE = 'PAGE_FETCH_FAILURE'

const INITIAL_STATE = {
  page: {
    name: '',
    type: '',
    content: '',
  },
  isLoading: false,
  isError: false,
  error: {
    message: '',
  },
}

const Page = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PAGE:
      return {
        ...state,
        type: payload.page,
      }

    case PAGE_FETCH:
      return {
        ...state,
        isLoading: true,
        page: {
          ...state.page,
          type: payload.type,
        },
      }

    case PAGE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        page: payload.page,
      }

    case PAGE_FETCH_FAILURE:
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

export const pageClean = (page = INITIAL_STATE.page) => ({
  type: PAGE,
  payload: page,
})

export const pageFetch = type => ({
  type: PAGE_FETCH,
  payload: { type },
})

export const pageFetchSuccess = page => ({
  type: PAGE_FETCH_SUCCESS,
  payload: { page },
})

export const pageFetchFailure = error => ({
  type: PAGE_FETCH_FAILURE,
  payload: { error },
})

export default Page
