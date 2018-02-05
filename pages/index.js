import React from 'react'
import withRedux from 'next-redux-wrapper'
import initStore from '../redux'
import Index from '../containers/Index'
import * as actions from '../redux/ducks/character/actions'

export default withRedux(
  initStore,
  null,
  {
    startFetchingCharacters: actions.startFetchingCharacters,
    stopFetchingCharacters: actions.stopFetchingCharacters
  },
)(Index)
