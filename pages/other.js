import withRedux from 'next-redux-wrapper'
import initStore from '../redux'

import Other from '../containers/Other'

export default withRedux(
  initStore,
  null,
  {},
)(Other)
