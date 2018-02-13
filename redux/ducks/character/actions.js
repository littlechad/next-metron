import * as types from './types'

export const startFetchingCharacters = id => ({
  type: types.START_FETCHING_CHARACTERS,
  payload: { id },
})

export const stopFetchingCharacters = () => ({
  type: types.STOP_FETCHING_CHARACTERS,
})

export const fetchCharacter = () => ({
  type: types.FETCH_CHARACTER,
})

export const fetchCharacterSuccess = data => ({
  type: types.FETCH_CHARACTER_SUCCESS,
  payload: { data },
})

export const fetchCharacterFailure = error => ({
  type: types.FETCH_CHARACTER_FAILURE,
  payload: { error },
})
