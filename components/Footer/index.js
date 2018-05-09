import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import Facebook from 'mdi-material-ui/Facebook'
import Instagram from 'mdi-material-ui/Instagram'
import YoutubePlay from 'mdi-material-ui/YoutubePlay'
import EmailOutline from 'mdi-material-ui/EmailOutline'

import styles from './styles'

const Footer = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={12} sm={12} xs={12}>
          <div className={classes.center}>
            <p className={classes.copy}>&copy;{new Date().getFullYear()}&nbsp;{process.env.COMPANY_NAME}.</p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}


export default withStyles(styles)(Footer)
