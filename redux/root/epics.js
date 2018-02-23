import { combineEpics } from 'redux-observable'
import { authEpic, signoutEpic } from '../ducks/Auth/epics'
import { fetchCharacterEpic, startFetchingCharactersEpic } from '../ducks/Character/epics'
import pingEpic from '../ducks/Ping/epics'
import { signinEpic, signinSuccessEpic } from '../ducks/Signin/epics'
import { userFetchEpic, userSetUsernameEpic } from '../ducks/User/epics'

const rootEpics = combineEpics(
  authEpic,
  fetchCharacterEpic,
  startFetchingCharactersEpic,
  pingEpic,
  signinEpic,
  signinSuccessEpic,
  signoutEpic,
  userFetchEpic,
  userSetUsernameEpic,
)

export default rootEpics
