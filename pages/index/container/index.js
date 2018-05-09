import React from 'react'

import { isAuthenticated, getToken } from 'lib/auth'

import Component from '../component'

class Index extends React.Component {
  componentDidMount() {
    if (isAuthenticated() && getToken()) {
      console.log('login success')
    }
  }

  render() {
    return (<Component {...this.props} />)
  }
}

export default Index
