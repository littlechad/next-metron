import withRedux from 'next-redux-wrapper'
import initStore from '../redux'

import About from '../containers/About'

export default withRedux(
  initStore,
  null,
  {},
)(About)
