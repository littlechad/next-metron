import { combineEpics } from 'redux-observable'
import { fetchCharacterEpic, stopFetchingCharactersEpic } from '../ducks/Character/epics'
import { pingEpic, pongEpic } from '../ducks/Ping/epics'

const rootEpics = combineEpics(
  fetchCharacterEpic,
  stopFetchingCharactersEpic,
  pingEpic,
  pongEpic,
)

export default rootEpics
