import withRedux from 'next-redux-wrapper'
import initStore from '../../redux'
import About from './container'

export default withRedux(
  initStore,
  null,
  {},
)(About)
