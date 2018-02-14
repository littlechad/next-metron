import withRedux from 'next-redux-wrapper'
import initStore from '../../redux'
import { startFetchingCharacters, stopFetchingCharacters } from '../../redux/ducks/Character/actions'
import { ping } from '../../redux/ducks/Ping/actions'

import Toolbox from './container'

const mapStateToProps = state => ({
  data: state.Character.data,
  error: state.Character.error,
  id: state.Character.id,
  isPinging: state.Ping.isPinging,
})

const mapDispatchToProps = dispatch => ({
  setInitialCharacter(id) {
    dispatch(startFetchingCharacters(id))
  },
  startFetching(id) {
    dispatch(startFetchingCharacters(id))
  },
  setPing() {
    dispatch(ping())
  },
  stopFetching() {
    dispatch(stopFetchingCharacters())
  },
})

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps,
)(Toolbox)
