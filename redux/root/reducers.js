import { combineReducers } from 'redux'
import Auth from 'ducks/Auth'
import Error from 'ducks/Error'
import Loading from 'ducks/Loading'
import Page from 'ducks/Page'
import Signin from 'ducks/Signin'
import Toggle from 'ducks/Toggle'
import User from 'ducks/User'

const rootReducers = combineReducers({
  Auth,
  Error,
  Loading,
  Page,
  Signin,
  Toggle,
  User,
})

export default rootReducers
