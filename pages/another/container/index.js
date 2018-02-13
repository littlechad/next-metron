import React from 'react'
import PropTypes from 'prop-types'
import Component from '../component'

class Another extends React.Component {
  componentDidMount() {
    this.props.setInitialCharacter(this.props.id)
  }

  render() {
    return (<Component {...this.props} />)
  }
}

Another.propTypes = {
  id: PropTypes.number.isRequired,
  setInitialCharacter: PropTypes.func.isRequired,
}

export default Another
