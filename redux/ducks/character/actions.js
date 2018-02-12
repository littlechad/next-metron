import * as types from './types'

export const startFetchingCharacters = () => ({
  type: types.START_FETCHING_CHARACTERS,
})

export const stopFetchingCharacters = () => ({
  type: types.STOP_FETCHING_CHARACTERS,
})

export const fetchCharacter = () => ({
  type: types.FETCH_CHARACTER,
})

export const fetchCharacterSuccess = response => ({
  type: types.FETCH_CHARACTER_SUCCESS,
  payload: { response },
})

export const fetchCharacterFailure = error => ({
  type: types.FETCH_CHARACTER_FAILURE,
  payload: { error },
})
