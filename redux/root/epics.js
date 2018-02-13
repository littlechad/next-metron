import { combineEpics } from 'redux-observable'
import { fetchCharacterEpic, startFetchingCharactersEpic } from '../ducks/Character/epics'
import pingEpic from '../ducks/Ping/epics'

const rootEpics = combineEpics(
  fetchCharacterEpic,
  startFetchingCharactersEpic,
  pingEpic,
)

export default rootEpics
