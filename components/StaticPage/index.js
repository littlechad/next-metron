import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'

import { withStyles } from 'material-ui/styles'

import Grid from 'material-ui/Grid'


const styles = () => ({
  root: {
    '-webkit-box-flex': '1',
    '-webkit-flex-grow': '1',
    '-ms-flex-positive': '1',
    flexGrow: '1',
    maxWidth: '935px',
    margin: '0 auto 30px',
    padding: '20px 0 0',
    width: '100%',
    '@media (max-width: 767px)': {
      padding: '20px',
    },
  },
})

const StaticPage = (props) => {
  const { classes, page } = props
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Typography variant="title" gutterBottom>
            <span className="text-capitalize">{page.name}</span>
          </Typography>
          {/* eslint-disable react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
          {/* eslint-enable react/no-danger */}
        </div>
      </Grid>
    </Grid>)
}

StaticPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  page: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(StaticPage)
