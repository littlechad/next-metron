import React from 'react'
import PropTypes from 'prop-types'
import { of } from 'rxjs/observable/of'

import { rootEpic } from '../../redux/epics'
import * as actions from '../../redux/ducks/character/actions'

import Index from './component/index'

class Counter extends React.Component {
  static async getInitialProps({ store, isServer }) {
    const resultAction = await rootEpic(
      of(actions.fetchCharacter(isServer)),
      store,
    ).toPromise()
    store.dispatch(resultAction)

    return { isServer }
  }

  componentDidMount() {
    this.props.startFetchingCharacters()
  }

  componentWillUnmount() {
    this.props.stopFetchingCharacters()
  }

  render() {
    return (<Index />)
  }
}

Counter.propTypes = {
  startFetchingCharacters: PropTypes.func.isRequired,
  stopFetchingCharacters: PropTypes.func.isRequired,
}

export default Counter
