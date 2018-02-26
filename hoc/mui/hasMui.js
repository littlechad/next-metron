import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'
import getPageContext from './getPageContext'

const hasMui = (Component) => {
  class HasMui extends React.Component {
    constructor(props) {
      super(props)
      this.pageContext = Object.keys(this.props.pageContext).length > 0
        ? this.props.pageContext
        : getPageContext()
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <Reboot />
          <Component {...this.props} />
        </MuiThemeProvider>
      )
    }
  }

  HasMui.defaultProps = {
    pageContext: {},
  }

  HasMui.propTypes = {
    pageContext: PropTypes.shape({}),
  }

  HasMui.getInitialProps = (ctx) => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx)
    }

    return {}
  }

  return HasMui
}

export default hasMui
