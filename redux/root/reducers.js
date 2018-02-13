import { combineReducers } from 'redux'
import Character from '../ducks/Character'
import Ping from '../ducks/Ping'

const rootReducers = combineReducers({
  Character,
  Ping,
})

export default rootReducers
