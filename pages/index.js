import withRedux from 'next-redux-wrapper'

import {
  signin,
  signinSetType,
  signinSetIsEligible,
} from 'ducks/Signin'

import {
  characterFetchStart,
  characterFetchStop,
} from 'ducks/Character'

import { ping } from 'ducks/Ping'

import initStore from '../redux'

import Index from './index/container'

const mapStateToProps = state => ({
  data: state.Character.data,
  error: state.Character.error,
  id: state.Character.id,
  isSigninEligible: state.Signin.isSigninEligible,
  type: state.Signin.type,
  signinData: state.Signin.data,
  social: {
    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID,
      fields: process.env.FACEBOOK_CLIENT_FIELDS,
      scope: process.env.FACEBOOK_CLIENT_SCOPE,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      scope: process.env.GOOGLE_CLIENT_SCOPE,
    },
  },
  isPinging: state.Ping.isPinging,
})

const mapDispatchToProps = dispatch => ({
  setInitialCharacter(id) {
    dispatch(characterFetchStart(id))
  },
  startFetching(id) {
    dispatch(characterFetchStart(id))
  },
  setPing() {
    dispatch(ping())
  },
  stopFetching() {
    dispatch(characterFetchStop())
  },
  handleFacebookLoginClick() {
    return (e) => {
      console.log(e)
    }
  },

  handleFacebookLoginCallback(response) {
    if (response.verified) {
      response.profilePic = (response.id && response.picture.data.url)
        ? `//graph.facebook.com/${response.id}/picture?width=600`
        : ''
      dispatch(signinSetType('facebook'))
      dispatch(signin(response))
    } else {
      dispatch(signinSetIsEligible(false))
    }
  },

  handleGoogleLoginSuccess(response) {
    dispatch(signinSetType('google'))
    dispatch(signin(response.profileObj))
  },

  handleGoogleLoginFailure(response) {
    console.log('error', response)
  },

  handleGoogleLoginLoading() {
    console.log('loading')
  },
})

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps,
)(Index)
