import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import Character from '../ducks/Character'
import { loadCharacterEpic } from '../ducks/Character/epics'

export const rootEpic = combineEpics(loadCharacterEpic)

export const rootReducer = combineReducers({
  Character,
})
