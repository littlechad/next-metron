import React from 'react'
import PropTypes from 'prop-types'

import Container from './container'

const Another = (props) => {
  props.setInitialCharacter(props.isServer, props.nextCharacterId)
  return (<Container />)
}

Another.propTypes = {
  isServer: PropTypes.bool.isRequired,
  nextCharacterId: PropTypes.number.isRequired,
  setInitialCharacter: PropTypes.func.isRequired,
}

export default Another
