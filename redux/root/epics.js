import { combineEpics } from 'redux-observable'

import { authMeEpic, authSignoutEpic } from 'observables/Auth'
import {
  pageFetchEpic,
} from 'observables/Page'
import {
  signinEpic,
  signinSuccessEpic,
} from 'observables/Signin'
import {
  userEditEpic,
  userFetchEpic,
  userValidateUsernameEpic,
} from 'observables/User'

const rootEpics = combineEpics(
  authMeEpic,
  authSignoutEpic,
  pageFetchEpic,
  signinEpic,
  signinSuccessEpic,
  userEditEpic,
  userFetchEpic,
  userValidateUsernameEpic,
)

export default rootEpics
