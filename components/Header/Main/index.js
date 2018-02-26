import React from 'react'
import PropTypes from 'prop-types'

import Member from './Member'
import Guest from './Guest'

const Header = props => (
  <div className="page-header navbar-fixed-top">
    {props.auth.isAuthenticated
      ? <Member
        auth={props.auth}
        toggle={props.toggle}
        goto={props.goto}
        handleSignout={props.handleSignout}
        toggleDrawer={props.toggleDrawer}
      />
      : <Guest />}
  </div>
)

Header.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
  toggle: PropTypes.shape({}).isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  goto: PropTypes.func.isRequired,
  handleSignout: PropTypes.func.isRequired,
}

export default Header
