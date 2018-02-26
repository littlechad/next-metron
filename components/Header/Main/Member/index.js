import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from 'material-ui/styles'

import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'


import Home from 'mdi-material-ui/Home'
import AccountCircleIcon from 'material-ui-icons/AccountCircle'
import LogoutVariant from 'mdi-material-ui/LogoutVariant'
import RoomIcon from 'material-ui-icons/Room'

import { Link } from 'config/routes'

import styles from '../styles'

const Member = (props) => {
  const {
    classes, toggleDrawer, toggle, auth,
  } = props
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
        <div>
          <IconButton
            aria-owns={null}
            aria-haspopup="true"
            color="inherit"
          >
            <i className={`mdi mdi-cards-outline ${classes.icon}`} />
          </IconButton>
          <IconButton
            aria-owns={null}
            aria-haspopup="true"
            color="inherit"
          >
            <i className={`mdi mdi-upload ${classes.icon}`} />
          </IconButton>
          <IconButton
            aria-owns={null}
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar
              className={classNames(classes.avatar, classes.smallAvatar)}
              onClick={toggleDrawer('drawer', toggle.open)}
            ><AccountCircleIcon />
            </Avatar>
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
                  className={classNames(classes.avatar, classes.smallAvatar)}
                />
                <ListItemText primary={auth.me.username} secondary={auth.me.email} />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary="Home"
                  onClick={props.goto({
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
                <ListItemText primary="Logout" onClick={props.handleSignout('drawer')} />
              </ListItem>
            </List>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  )
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

export default withStyles(styles)(Member)
