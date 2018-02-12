import React from 'react'
import { connect } from 'react-redux'
import { of } from 'rxjs/observable/of'

import { rootEpic } from '../../../redux/modules/root'
import { fetchCharacter } from '../../../redux/ducks/Character/actions'

import Index from '../component'

const mapStateToProps = state => ({
  nextCharacterId: state.Character.nextCharacterId,

})

const mapDispatchToProps = dispatch => ({
  async setInitialCharacter(nextCharacterId) {
    const epic = of(fetchCharacter(nextCharacterId))
    const resultAction = await rootEpic(
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
