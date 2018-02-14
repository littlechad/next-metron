import React from 'react'
import Link from 'next/link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Button from 'react-toolbox/lib/button/Button'

import Info from '../../../components/Info'

const Component = props => (
  <div>
    <Helmet
      title="Ini other | Hello next.js!"
      meta={[
        { property: 'og:title', content: 'ini other title' },
        { property: 'og:description', content: 'ini other description' },
      ]}
    />
    <h1>Other Page</h1>
    <Info {...props} />
    <br />
    <nav>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <Link href="/"><a>Go back home</a></Link><br />
      <Link href="/another"><a>Navigate to another</a></Link><br />
      <Link href="/about"><a>Navigate to about</a></Link>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
      <br /><br />
      <button onClick={() => { props.setPing() }}>Start {props.isPinging ? 'pong' : 'ping'}ing</button>
      <br /><br />
      <button onClick={() => { props.stopFetching() }}>Stop fetching</button>
      <br /><br />
      <Button raised primary onClick={() => { props.startFetching() }}>Start fetching</Button>
    </nav>
  </div>
)

Component.propTypes = {
  isPinging: PropTypes.bool.isRequired,
  setPing: PropTypes.func.isRequired,
  stopFetching: PropTypes.func.isRequired,
  startFetching: PropTypes.func.isRequired,
}
export default Component
