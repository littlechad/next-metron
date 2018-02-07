import { combineEpics } from 'redux-observable'

import { fetchUserEpic, fetchCharacterEpic } from './ducks/Character/epics'

export const rootEpic = combineEpics(
  fetchUserEpic,
  fetchCharacterEpic,
)

export default { rootEpic }
