import * as types from './types'

export const fetchCharacter = id => ({
  type: types.FETCH_CHARACTER,
  payload: { id },
})

export const fetchCharacterSuccess = response => ({
  type: types.FETCH_CHARACTER_SUCCESS,
  payload: { response },
})

export const fetchCharacterFailure = error => ({
  type: types.FETCH_CHARACTER_FAILURE,
  payload: { error },
})

export const stopFetchingCharacters = () => ({
  type: types.STOP_FETCHING_CHARACTERS,
})
