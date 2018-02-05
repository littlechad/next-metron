import React from 'react'
import Link from 'next/link'
import { rootEpic } from '../../redux/epics'
import * as actions from '../../redux/ducks/character/actions'
import { of } from 'rxjs/observable/of'

import Index from './component/index'

class Counter extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    const resultAction = await rootEpic(
      of(actions.fetchCharacter(isServer)),
      store
    ).toPromise()
    store.dispatch(resultAction)

    return { isServer }
  }

  componentDidMount () {
    this.props.startFetchingCharacters()
  }

  componentWillUnmount () {
    this.props.stopFetchingCharacters()
  }

  render() {
    return (<Index />)
  }
}

export default Counter
