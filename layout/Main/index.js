import React from 'react'

import Header from 'components/Header/Main'

const withLayoutMain = (WrappedComponent) => {
  class Main extends React.Component {
    componentDidMount() {}

    render() {
      return (
        <div className="container">
          <Header />
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }

  return Main
}

export default withLayoutMain
