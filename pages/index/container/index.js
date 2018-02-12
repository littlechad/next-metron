import React from 'react'
import { connect } from 'react-redux'
import { of } from 'rxjs/observable/of'

import rootEpics from '../../../redux/root/epics'
import { startFetchingCharacters } from '../../../redux/ducks/Character/actions'

import Index from '../component'

const mapStateToProps = state => ({
  nextCharacterId: state.Character.nextCharacterId,

})

const mapDispatchToProps = dispatch => ({
  async setInitialCharacter() {
    const epic = of(startFetchingCharacters())
    const resultAction = await rootEpics(epic).toPromise()
    dispatch(resultAction)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)((props) => {
  props.setInitialCharacter()
  return (<Index />)
})
