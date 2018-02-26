import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import styles from '../styles'

const Guest = (props) => {
  const { classes } = props
  return (
    <AppBar position="static" color="primary" className={`bar ${classes.bar}`}>
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          className={classes.flex}
          onClick={() => {}}
        >
          Metron
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Guest.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(Guest)
