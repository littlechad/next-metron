import React from 'react'
import { Router } from 'config/routes'

import { isAuthenticated, getToken } from 'lib/auth'

import Component from '../component'

class Signin extends React.Component {
  componentDidMount() {
    if (isAuthenticated() && getToken()) {
      Router.pushRoute('home')
    }
  }

  render() {
    return (<Component {...this.props} />)
  }
}

export default Signin
