import React from 'react'
import { connect } from 'react-redux'
import { of } from 'rxjs/observable/of'

import { rootEpic } from '../../../redux/epics'
import { startFetchingCharacters } from '../../../redux/ducks/Character/actions'

import Another from '../component'

const mapStateToProps = state => ({
  nextCharacterId: state.Character.nextCharacterId,

})

const mapDispatchToProps = dispatch => ({
  async setInitialCharacter(nextCharacterId) {
    // const epic = of(startFetchingCharacters())
    // const resultAction = await rootEpics(
    //   epic,
    //   nextCharacterId,
    // ).toPromise()
    dispatch(startFetchingCharacters(nextCharacterId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)((props) => {
  props.setInitialCharacter(props.nextCharacterId)
  return (<Another />)
})
