import withRedux from 'next-redux-wrapper'
import initStore from '../redux'
import Index from './index/container'
import { stopFetchingCharacters } from '../redux/ducks/Character/actions'

export default withRedux(
  initStore,
  null,
  {
    stopFetchingCharacters,
  },
)(Index)
