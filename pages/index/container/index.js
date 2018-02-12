import React from 'react'
import { connect } from 'react-redux'
import { of } from 'rxjs/observable/of'

import rootEpics from '../../../redux/root/epics'
import { fetchCharacter } from '../../../redux/ducks/Character/actions'

import Index from '../component'

const mapStateToProps = state => ({
  nextCharacterId: state.Character.nextCharacterId,

})

const mapDispatchToProps = dispatch => ({
  async setInitialCharacter(nextCharacterId) {
    const epic = of(fetchCharacter(nextCharacterId))
    const resultAction = await rootEpics(
      epic,
      nextCharacterId,
    ).toPromise()
    dispatch(resultAction)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)((props) => {
  props.setInitialCharacter(props.nextCharacterId)
  return (<Index />)
})
