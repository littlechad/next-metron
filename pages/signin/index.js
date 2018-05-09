import withRedux from 'next-redux-wrapper'

import { signin } from 'ducks/Signin'

import initStore from '../redux'
import Signin from './index/container'

const mapStateToProps = state => ({
  auth: state.Auth,
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    scope: process.env.GOOGLE_CLIENT_SCOPE,
  },
})

const mapDispatchToProps = dispatch => ({
  handleGoogleLoginSuccess(response) {
    console.log(response)
    // dispatch(signin(response.profileObj))
  },
  handleGoogleLoginFailure() {},
  handleGoogleLoginLoading() {},
})

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps,
)(Signin)
