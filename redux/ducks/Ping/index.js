import * as types from './types'

const INITIAL_STATE = {
  isPinging: false,
}

const Ping = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case types.PING:
      return { isPinging: true }

    case types.PONG:
      return { isPinging: false }

    default:
      return state
  }
}

export default Ping
