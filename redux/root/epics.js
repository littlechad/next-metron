import { combineEpics } from 'redux-observable'
import { authEpic, signoutEpic } from 'observables/Auth'
import { characterFetchEpic, characterFetchStartEpic } from 'observables/Character'
import pingEpic from 'observables/Ping'
import { signinEpic, signinSuccessEpic } from 'observables/Signin'
import { userFetchEpic, userSetUsernameEpic } from 'observables/User'

const rootEpics = combineEpics(
  authEpic,
  characterFetchEpic,
  characterFetchStartEpic,
  pingEpic,
  signinEpic,
  signinSuccessEpic,
  signoutEpic,
  userFetchEpic,
  userSetUsernameEpic,
)

export default rootEpics
