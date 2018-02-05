import { combineEpics } from 'redux-observable'

import { fetchUserEpic, fetchCharacterEpic } from './ducks/character/epics'

export const rootEpic = combineEpics(
  fetchUserEpic,
  fetchCharacterEpic,
)

export default { rootEpic }
