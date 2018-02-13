import React from 'react'
import PropTypes from 'prop-types'
import Component from '../component'

class Index extends React.Component {
  componentDidMount() {
    this.props.setInitialCharacter(this.props.id)
  }

  render() {
    return (<Component {...this.props} />)
  }
}

Index.propTypes = {
  id: PropTypes.number.isRequired,
  setInitialCharacter: PropTypes.func.isRequired,
}

export default Index
