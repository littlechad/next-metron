import React from 'react'
import PropTypes from 'prop-types'
import GoogleLogin from 'react-google-login'

import { withStyles } from 'material-ui/styles'
import withLayout from 'hoc/layout'
import hasMui from 'hoc/mui/hasMui'

import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'

import Google from 'mdi-material-ui/Google'

const styles = theme => ({
  google: {
    background: 'transparent',
    width: 'auto',
    paddingTop: '0',
    paddingBottom: '0',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  signin: {
    color: '#80898e',
    height: '400px',
    padding: '60px 0',
    textAlign: 'center',
  },
  featureLeft: {
    color: '#333333',
    background: '#fafafa',
    height: '400px',
    padding: '40px',
    textAlign: 'right',
  },
  featureRight: {
    height: '400px',
    padding: '40px',
    textAlign: 'left',
  },
  heading: {
    margin: '40px 0',
    fontSize: '28px',
    fontWeight: '300',
  },
  text: {
    margin: '50px 0',
  },
  colored: {
    color: '#65727d',
  },
})

const Index = (props) => {
  const {
    classes,
    google,
    handleGoogleLoginSuccess,
    handleGoogleLoginFailure,
  } = props
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <div className={classes.signin}>
          <GoogleLogin
            clientId={google.clientId}
            scope={google.scope}
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
            onRequest={() => {}}
            offline={false}
            autoLoad={false}
            approvalPrompt="force"
            tag="span"
            className={classes.google}
          >
            <Button onClick={() => {}} variant="raised" size="large" color="primary">
              <Google className={`${classes.leftIcon}`} /> Google
            </Button>
          </GoogleLogin>
          <p>
            By signing up, you agree to our<br />
            <a href="/terms-of-use">Terms</a> &&nbsp;
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>
        </div>
      </Grid>
    </Grid>
  )
}

Index.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  google: PropTypes.shape({
    clientId: PropTypes.string,
    scope: PropTypes.string,
  }).isRequired,
  handleGoogleLoginSuccess: PropTypes.func.isRequired,
  handleGoogleLoginFailure: PropTypes.func.isRequired,
}

export default hasMui(withLayout(withStyles(styles)(Index)))
