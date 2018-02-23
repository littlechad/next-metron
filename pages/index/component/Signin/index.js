import React from 'react'
import PropTypes from 'prop-types'

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import blue from 'material-ui/colors/blue'

import Error from 'components/Error'

const styles = theme => ({
  button: {
    background: blue[900],
  },
  google: {
    background: 'transparent',
    width: 'auto',
    paddingTop: '0',
    paddingBottom: '0',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
})

const Signin = (props) => {
  const { classes } = props
  return (
    <div
      style={{ padding: '40px 0', textAlign: 'center' }}
    >
      <p className="widget-blog-subtitle">
          Sign in below
      </p>
      <FacebookLogin
        appId={props.social.facebook.clientId}
        autoLoad={false}
        callback={props.handleFacebookLoginCallback}
        fields={props.social.facebook.fields}
        scope={props.social.facebook.scope}
        render={renderProps => (
          <Button
            onClick={renderProps.onClick}
            variant="raised"
            size="large"
            color="secondary"
          >
            <Icon className={`mdi mdi-facebook ${classes.leftIcon}`} />
            Facebook
          </Button>
          )}
      />
      <br /><br />
      <GoogleLogin
        clientId={props.social.google.clientId}
        scope={props.social.google.scope}
        onSuccess={props.handleGoogleLoginSuccess}
        onFailure={props.handleGoogleLoginFailure}
        onRequest={() => {}}
        offline={false}
        autoLoad={false}
        approvalPrompt="force"
        tag="span"
        className={classes.google}
      >
        <Button onClick={() => {}} variant="raised" size="large" color="primary">
          <Icon className={`mdi mdi-google ${classes.leftIcon}`} />
          Google
        </Button>
      </GoogleLogin>
    </div>
  )
}

Signin.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  social: PropTypes.shape({
    facebook: PropTypes.shape({
      clientId: PropTypes.string,
      scope: PropTypes.string,
      fields: PropTypes.string,
    }).isRequired,
    google: PropTypes.shape({
      clientId: PropTypes.string,
      scope: PropTypes.string,
    }).isRequired,
  }).isRequired,
  handleFacebookLoginCallback: PropTypes.func.isRequired,
  handleGoogleLoginSuccess: PropTypes.func.isRequired,
  handleGoogleLoginFailure: PropTypes.func.isRequired,
}

export default withStyles(styles)(Signin)
