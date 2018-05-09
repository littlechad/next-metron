import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

import { CircularProgress } from 'material-ui/Progress'

const styles = {
  loader: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%',
  },
}

const Loading = props => (
  <div className="block-loader">
    <CircularProgress className={props.classes.loader} color="secondary" />
  </div>
)

Loading.propTypes = {
  classes: PropTypes.shape({
    loader: PropTypes.string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(Loading)
