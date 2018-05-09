import React from 'react'
import { connect } from 'react-redux'

import { isAuthenticated, getToken, removeToken } from 'lib/auth'

import { authMe, authMeClean, authSignout } from 'ducks/Auth'
import { setError, setReferrer } from 'ducks/Error'
import { loading } from 'ducks/Loading'
import { toggle } from 'ducks/Toggle'
import NProgress from 'nprogress'

import PropTypes from 'prop-types'

import { Router } from 'config/routes'

import Footer from 'components/Footer'
import Header from 'components/Header'
import MobileBottom from 'components/Header/Member/Mobile/Bottom'

NProgress.configure({
  showSpinner: false,
})

const styles = {
  pageContainer: {
    background: '#fefefe',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  main: {
    paddingTop: '56px',
    background: '#fefefe',
    flex: '1 0 auto',
  },
}

const authRoutes = [
  '/discover',
  '/post_add',
  '/post_edit',
  '/respond',
  '/room_edit',
]

const withLayout = (WrappedComponent) => {
  class WithLayout extends React.Component {
    componentDidMount() {
      if (!isAuthenticated() && this.props.url.pathname !== '/signin') {
        const authPages = authRoutes.includes(this.props.url.pathname)
        this.props.handleError('You need to signin to see that page', this.props.url.asPath)
        this.props.toggleError('snackerror', false)
        if (authPages) {
          Router.pushRoute('signin')
        }
      }
      if (isAuthenticated() && getToken()) {
        this.props.me()
      }
    }

    render() {
      Router.onRouteChangeStart = () => NProgress.start()
      Router.onRouteChangeComplete = () => NProgress.done()
      Router.onRouteChangeError = () => NProgress.done()
      return (
        <div style={styles.pageContainer}>
          <Header
            auth={this.props.auth}
            goto={this.props.goto}
            handleSignout={this.props.handleSignout}
            toggle={this.props.toggle}
            toggleDrawer={this.props.toggleDrawer}
          />
          <div style={styles.main}>
            <WrappedComponent {...this.props} />
          </div>
          <Footer />
          {this.props.auth.isAuthenticated && (
          <MobileBottom
            auth={this.props.auth}
            toggle={this.props.toggle}
            toggleDrawer={this.props.toggleDrawer}
            goto={this.props.goto}
            handleSignout={this.props.handleSignout}
          />)}
        </div>
      )
    }
  }

  WithLayout.propTypes = {
    auth: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
    }).isRequired,
    toggle: PropTypes.shape({}).isRequired,
    url: PropTypes.shape({
      asPath: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    me: PropTypes.func.isRequired,
    goto: PropTypes.func.isRequired,
    handleError: PropTypes.func.isRequired,
    handlePageLoad: PropTypes.func.isRequired,
    handleSignout: PropTypes.func.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    toggleError: PropTypes.func.isRequired,
  }

  const mapStateToProps = state => ({
    auth: state.Auth,
    toggle: state.Toggle,
  })

  const mapDispatchToProps = dispatch => ({
    me() { dispatch(authMe()) },
    handleError(message, referrer) {
      dispatch(setReferrer({ referrer }))
      dispatch(setError({ message }))
    },
    handlePageLoad(isLoading) { dispatch(loading(isLoading)) },
    handleSignout(name) {
      return (e) => {
        e.preventDefault()
        dispatch(toggle({
          name,
          open: false,
        }))
        dispatch(authSignout())
        removeToken()
        authMeClean()
        window.location.href = '/'
      }
    },
    goto(data) {
      return (e) => {
        e.preventDefault()
        if (data.page === 'room') {
          dispatch(roomClean())
          dispatch(roomFetch(data.params.username))
        }

        if (data.page === 'post' || data.page === 'respond') {
          dispatch(postFetch(data.params.id))
        }

        if (data.page === 'response') {
          dispatch(responseFetch(data.params.id))
        }

        Router.pushRoute(data.page, data.params)
        if (data.toggleName) {
          dispatch(toggle({
            name: data.toggleName,
            open: false,
          }))
        }
      }
    },
    toggleDrawer(name, open) {
      return (e) => {
        e.preventDefault()
        dispatch(toggle({
          name,
          open: !open,
        }))
      }
    },
    toggleError(name, open) {
      dispatch(toggle({
        name,
        open: !open,
      }))
    },
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WithLayout)
}

export default withLayout
