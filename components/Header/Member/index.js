import React from 'react'
import PropTypes from 'prop-types'
import mobile from 'is-mobile'

import Desktop from './Desktop'
import MobileTop from './Mobile/Top'

const Member = (props) => {
  const {
    auth, classes, goto, handleSignout, toggle, toggleDrawer,
  } = props
  return mobile()
    ? (<MobileTop
      auth={auth}
      classes={classes}
      toggle={toggle}
      toggleDrawer={toggleDrawer}
      goto={goto}
      handleSignout={handleSignout}
    />)
    : (<Desktop
      auth={auth}
      classes={classes}
      toggle={toggle}
      toggleDrawer={toggleDrawer}
      goto={goto}
      handleSignout={handleSignout}
    />)
}

Member.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  auth: PropTypes.shape({
    me: PropTypes.shape({
      email: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      profilePic: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  toggle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
  }).isRequired,
  goto: PropTypes.func.isRequired,
  handleSignout: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
}

export default Member
