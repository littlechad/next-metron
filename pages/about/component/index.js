import React from 'react'
import PropTypes from 'prop-types'

import withLayout from 'hoc/layout'
import hasMui from 'hoc/mui/hasMui'

import StaticPage from 'components/StaticPage'

const About = (props) => {
  const { page } = props
  return (<StaticPage page={page} />)
}

About.propTypes = {
  page: PropTypes.shape({}).isRequired,
}

export default hasMui(withLayout(About))
