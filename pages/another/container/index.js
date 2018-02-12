import React from 'react'
import { connect } from 'react-redux'
import { of } from 'rxjs/observable/of'

import { rootEpic } from '../../../redux/epics'
import * as actions from '../../../redux/ducks/Character/actions'

import Another from '../component'

const mapStateToProps = state => ({
  nextCharacterId: state.Character.nextCharacterId,

})

const mapDispatchToProps = dispatch => ({
  async setInitialCharacter(nextCharacterId) {
    const resultAction = await rootEpic(
      of(actions.fetchCharacter(nextCharacterId)),
      nextCharacterId,
    ).toPromise()
    dispatch(resultAction)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)((props) => {
  console.log('props: ', props)
  props.setInitialCharacter(props.nextCharacterId)
  return (<Another />)
})
