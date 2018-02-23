import { combineReducers } from 'redux'
import Auth from 'ducks/Auth'
import Character from 'ducks/Character'
import Ping from 'ducks/Ping'
import Signin from 'ducks/Signin'
import Toggle from 'ducks/Toggle'
import User from 'ducks/User'

const rootReducers = combineReducers({
  Auth,
  Character,
  Ping,
  Signin,
  Toggle,
  User,
})

export default rootReducers
