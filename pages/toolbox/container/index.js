import React from 'react'
import PropTypes from 'prop-types'

import ThemeProvider from 'react-toolbox/lib/ThemeProvider'

import Component from '../component'

import theme from '../../../static/theme'

class Toolbox extends React.Component {
  componentDidMount() {
    this.props.setInitialCharacter(this.props.id)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Component {...this.props} />
      </ThemeProvider>)
  }
}

Toolbox.propTypes = {
  id: PropTypes.number.isRequired,
  setInitialCharacter: PropTypes.func.isRequired,
}

export default Toolbox
