import React from 'react'
import PropTypes from 'prop-types'
import mobile from 'is-mobile'
import { Router } from 'config/routes'

import { withStyles } from 'material-ui/styles'

import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui-icons/Home'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    borderTop: '1px solid #dce0ec',
    '@media screen and (max-width: 767px)': {
      display: 'flex !important',
    },
  },
}

const MobileBottom = (props) => {
  const { classes } = props
  return mobile() && (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        icon={<HomeIcon />}
        onClick={() => Router.pushRoute('home')}
      />
    </BottomNavigation>
  )
}

MobileBottom.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(MobileBottom)
