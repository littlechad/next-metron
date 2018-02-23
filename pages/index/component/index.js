import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

import hasMui from 'hoc/mui/hasMui'

import withLayout from 'hoc/layout/Primary'
import Info from 'components/Info'

import Signin from './Signin'

const styles = theme => ({
  buttonContainer: {
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
        title="This is index | Hello next.js!"
        meta={[
        { property: 'og:title', content: 'This is index\'s title' },
        { property: 'og:description', content: 'This is index\'s description' },
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
      <Signin
        social={props.social}
        isSigninEligible={props.isSigninEligible}
        handleFacebookLoginCallback={props.handleFacebookLoginCallback}
        handleGoogleLoginSuccess={props.handleGoogleLoginSuccess}
        handleGoogleLoginFailure={props.handleGoogleLoginFailure}
      />
    </div>
  )
}

Index.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isPinging: PropTypes.bool.isRequired,
  setPing: PropTypes.func.isRequired,
  stopFetching: PropTypes.func.isRequired,
  startFetching: PropTypes.func.isRequired,

  isSigninEligible: PropTypes.bool.isRequired,
  social: PropTypes.shape({
    facebook: PropTypes.shape({}).isRequired,
    google: PropTypes.shape({}).isRequired,
  }).isRequired,
  handleFacebookLoginCallback: PropTypes.func.isRequired,
  handleGoogleLoginSuccess: PropTypes.func.isRequired,
  handleGoogleLoginFailure: PropTypes.func.isRequired,
}

export default hasMui(withLayout(withStyles(styles)(Index)))
