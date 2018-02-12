import { combineEpics } from 'redux-observable'
import { fetchCharacterEpic, startFetchingCharactersEpic } from '../ducks/Character/epics'
import { pingEpic, pongEpic } from '../ducks/Ping/epics'

const rootEpics = combineEpics(
  fetchCharacterEpic,
  startFetchingCharactersEpic,
  pingEpic,
  pongEpic,
)

export default rootEpics
