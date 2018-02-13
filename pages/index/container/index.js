import React from 'react'
import { connect } from 'react-redux'
import { startFetchingCharacters, stopFetchingCharacters } from '../../../redux/ducks/Character/actions'
import { ping } from '../../../redux/ducks/Ping/actions'

import Index from '../component'

const mapStateToProps = state => ({
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => (<Index
  id={props.id}
  isPinging={props.isPinging}
  setInitialCharacter={props.setInitialCharacter}
  setPing={props.setPing}
  stopFetching={props.stopFetching}
  startFetching={props.startFetching}
/>))
