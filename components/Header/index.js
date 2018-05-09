import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

import Guest from './Guest'
import Member from './Member'
import styles from './styles'

const Header = (props) => {
  const {
    auth, classes, goto, handleSignout, toggle, toggleDrawer,
  } = props
  return (
    auth.isAuthenticated
      ?
        <Member
          auth={auth}
          classes={classes}
          toggle={toggle}
          goto={goto}
          handleSignout={handleSignout}
          toggleDrawer={toggleDrawer}
        />
      : <Guest classes={classes} />
  )
}

Header.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
  classes: PropTypes.shape({}).isRequired,
  toggle: PropTypes.shape({}).isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  goto: PropTypes.func.isRequired,
  handleSignout: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header)
