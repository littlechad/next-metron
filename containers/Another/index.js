import { connect } from 'react-redux'
import { of } from 'rxjs/observable/of'

import { rootEpic } from '../../redux/epics'
import * as actions from '../../redux/ducks/Character/actions'

import Another from './components'

const mapStateToProps = state => ({
  isServer: state.Character.isFetchedOnServer,
  nextCharacterId: state.Character.nextCharacterId,

})

const mapDispatchToProps = dispatch => ({
  async setInitialCharacter(isServer, nextCharacterId) {
    const resultAction = await rootEpic(
      of(actions.fetchCharacter(isServer)),
      nextCharacterId,
    ).toPromise()
    dispatch(resultAction)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Another)
