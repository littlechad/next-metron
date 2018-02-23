import React from 'react'
import { connect } from 'react-redux'
import { auth } from 'ducks/Auth/actions'

import PropTypes from 'prop-types'

import Header from 'components/Header/Main'
import Footer from 'components/Footer'


const withLayout = (WrappedComponent) => {
  class WithLayout extends React.Component {
    componentDidMount() {
      this.props.me()
    }

    render() {
      return (
        <div className="outer-container">
          <Header auth={this.props.auth} />
          <div
            className="inner-container page-container page-content-inner page-container-bg-solid"
          >
            <div className="container-fluid">
              <WrappedComponent {...this.props} />
              <Footer />
            </div>
          </div>
        </div>
      )
    }
  }

  WithLayout.propTypes = {
    auth: PropTypes.shape({}).isRequired,
    me: PropTypes.func.isRequired,
  }

  const mapStateToProps = state => ({
    auth: state.Auth,
  })

  const mapDispatchToProps = dispatch => ({
    me() { dispatch(auth()) },
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WithLayout)
}

export default withLayout
