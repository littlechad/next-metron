import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

import hasMui from 'utils/mui/hasMui'
import withLayoutMain from 'layout/Main'
import Info from 'components/Info'

const styles = theme => ({
  buttonContainer: {
    minWidth: 275,
    width: '275px',
    margin: '20px auto',
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit,
  },
})

const Index = (props) => {
  const { classes, ...infoProps } = props
  return (
    <div>
      <Helmet
        title="Ini index | Hello next.js!"
        meta={[
        { property: 'og:title', content: 'ini index title' },
        { property: 'og:description', content: 'ini index description' },
      ]}
      />
      <Info {...infoProps} />
      <br />
      <div className={classes.buttonContainer}>
        <Button
          variant="raised"
          onClick={() => { props.setPing() }}
          className={classes.button}
        >Start {props.isPinging ? 'pong' : 'ping'}ing
        </Button>
        <Button
          variant="raised"
          color="primary"
          onClick={() => { props.stopFetching() }}
          className={classes.button}
        >Stop fetching
        </Button>
        <Button
          variant="raised"
          color="secondary"
          onClick={() => { props.startFetching() }}
          className={classes.button}
        >Start fetching
        </Button>
      </div>
    </div>
  )
}

Index.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isPinging: PropTypes.bool.isRequired,
  setPing: PropTypes.func.isRequired,
  stopFetching: PropTypes.func.isRequired,
  startFetching: PropTypes.func.isRequired,
}

export default hasMui(withLayoutMain(withStyles(styles)(Index)))
