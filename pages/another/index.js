import withRedux from 'next-redux-wrapper'
import initStore from '../../redux'
import Another from './container'
import * as actions from '../../redux/ducks/Character/actions'

export default withRedux(
  initStore,
  null,
  {
    startFetchingCharacters: actions.startFetchingCharacters,
    stopFetchingCharacters: actions.stopFetchingCharacters,
  },
)(Another)
