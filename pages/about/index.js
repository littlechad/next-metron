import React from 'react'

import withRedux from 'next-redux-wrapper'

import initStore from '../../redux'
import About from './container'

const mapStateToProps = state => ({
  auth: state.Auth,
  page: {
    name: 'About',
    content: <h1>Hi! This is the about page</h1>,
  },
})

export default withRedux(
  initStore,
  mapStateToProps,
)(About)
