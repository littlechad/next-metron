export const PING = 'PING'
export const PONG = 'PONG'

const INITIAL_STATE = {
  isPinging: false,
}

const Ping = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case PING:
      return { isPinging: true }

    case PONG:
      return { isPinging: false }

    default:
      return state
  }
}

export const ping = () => ({
  type: PING,
})

export const pong = () => ({
  type: PONG,
})

export default Ping
