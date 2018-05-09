import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import Home from 'mdi-material-ui/Home'
import LogoutVariant from 'mdi-material-ui/LogoutVariant'

const MobileTop = (props) => {
  const {
    auth, classes, goto, handleSignout, toggle, toggleDrawer,
  } = props
  return (
    <AppBar position="fixed" color="inherit" className={classnames(classes.mobile, classes.bar)}>
      <Toolbar disableGutters>
        <Typography variant="title" color="inherit" className={`${classes.flex} ${classes.logo}`}>
          <a href="/">{process.env.COMPANY_NAME}</a>
        </Typography>
        <div>
          <IconButton
            className={classes.menu}
            aria-owns={null}
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar
              alt={auth.me.username}
              src={auth.me.profilePic}
              className={classnames(classes.avatar, classes.smallAvatar)}
              onClick={toggleDrawer('drawer', toggle.open)}
            />
          </IconButton>
          <Drawer
            anchor="right"
            open={props.toggle.name === 'drawer' && props.toggle.open}
            onClose={toggleDrawer('drawer', toggle.open)}
          >
            <List component="nav">
              <ListItem>
                <Avatar
                  alt={auth.me.username}
                  src={auth.me.profilePic}
                  className={classnames(classes.avatar, classes.smallAvatar)}
                />
                <ListItemText primary={auth.me.username} secondary={auth.me.email} />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary="Home"
                  onClick={goto({
                    page: '/',
                    params: { },
                    toggleName: 'drawer',
                  })}
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <LogoutVariant />
                </ListItemIcon>
                <ListItemText primary="Logout" onClick={handleSignout('drawer')} />
              </ListItem>
            </List>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  )
}

MobileTop.propTypes = {
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

export default MobileTop
