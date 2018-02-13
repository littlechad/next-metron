import withRedux from 'next-redux-wrapper'
import initStore from '../../redux'
import Other from './container'

export default withRedux(
  initStore,
  null,
  {},
)(Other)
