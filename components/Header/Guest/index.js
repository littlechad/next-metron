import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const Guest = (props) => {
  const { classes } = props
  return (
    <AppBar position="fixed" color="inherit" className={classes.bar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="title" color="inherit" className={classes.flex}>
          <a href="/">{process.env.COMPANY_NAME}</a>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Guest.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}

export default Guest
