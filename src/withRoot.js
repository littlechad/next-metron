import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'
import getPageContext from './getPageContext'

function withRoot(Component) {
  class WithRoot extends React.Component {
    componentWillMount() {
      this.pageContext = this.props.pageContext || getPageContext()
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      const { theme, sheetsManager } = this.pageContext
      return (
        <MuiThemeProvider
          theme={theme}
          sheetsManager={sheetsManager}
        >
          <Reboot />
          <Component {...this.props} />
        </MuiThemeProvider>
      )
    }
  }

  WithRoot.defaultProps = {
    pageContext: {},
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.shape({}),
  }

  WithRoot.getInitialProps = (ctx) => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx)
    }

    return {}
  }

  return WithRoot
}

export default withRoot
