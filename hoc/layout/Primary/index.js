import React from 'react'
import { connect } from 'react-redux'
import { auth, signout } from 'ducks/Auth/actions'
import { toggle } from 'ducks/Toggle/actions'

import { isAuthenticated, getToken } from 'lib/auth'

import PropTypes from 'prop-types'

import { Router } from 'config/routes'

import Header from 'components/Header/Main'

const withLayout = (WrappedComponent) => {
  class WithLayout extends React.Component {
    componentDidMount() {
      if (isAuthenticated() && getToken()) {
        this.props.me()
      }
    }

    render() {
      return (
        <div className="outer-container">
          <Header
            auth={this.props.auth}
            goto={this.props.goto}
            handleSignout={this.props.handleSignout}
            toggle={this.props.toggle}
            toggleDrawer={this.props.toggleDrawer}
          />
          <div
            className="inner-container page-container page-content-inner page-container-bg-solid"
          >
            <div className="container-fluid">
              <WrappedComponent {...this.props} />
            </div>
          </div>
        </div>
      )
    }
  }

  WithLayout.propTypes = {
    auth: PropTypes.shape({}).isRequired,
    toggle: PropTypes.shape({}).isRequired,
    me: PropTypes.func.isRequired,
    goto: PropTypes.func.isRequired,
    handleSignout: PropTypes.func.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
  }

  const mapStateToProps = state => ({
    auth: state.Auth,
    toggle: state.Toggle,
  })

  const mapDispatchToProps = dispatch => ({
    me() { dispatch(auth()) },
    toggleDrawer(name, open) {
      return (e) => {
        e.preventDefault()
        dispatch(toggle({
          name,
          open: !open,
        }))
      }
    },
    goto(data) {
      return (e) => {
        e.preventDefault()
        Router.pushRoute(data.page, data.params)
        dispatch(toggle({
          name: data.toggleName,
          open: false,
        }))
      }
    },
    handleSignout(name) {
      return (e) => {
        e.preventDefault()
        dispatch(toggle({
          name,
          open: false,
        }))
        dispatch(signout())
      }
    },
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WithLayout)
}

export default withLayout
