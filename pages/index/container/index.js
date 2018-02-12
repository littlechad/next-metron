import React from 'react'
import { connect } from 'react-redux'
import { of } from 'rxjs/observable/of'

import rootEpics from '../../../redux/root/epics'
import { fetchCharacter } from '../../../redux/ducks/Character/actions'

import Index from '../component'

const mapStateToProps = state => ({
  id: state.Character.id,

})

const mapDispatchToProps = dispatch => ({
  async setInitialCharacter(id) {
    const epic = of(fetchCharacter({ id }))
    const resultAction = await rootEpics(
      epic,
      id,
    ).toPromise()
    dispatch(resultAction)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)((props) => {
  props.setInitialCharacter(props.id)
  return (<Index />)
})
