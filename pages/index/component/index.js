import React from 'react'
import Link from 'next/link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Info from '../container/info'

const Index = (props) => {
  props.setInitialCharacter(props.id)
  return (
    <div>
      <Helmet
        title="Ini index | Hello next.js!"
        meta={[
        { property: 'og:title', content: 'ini index title' },
        { property: 'og:description', content: 'ini index description' },
      ]}
      />
      <h1>Index Page</h1>
      <Info />
      <br />
      <nav>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <Link href="/other"><a>Navigate to other</a></Link><br />
        <Link href="/about"><a>Navigate to about</a></Link>
        {/* eslint-enable jsx-a11y/anchor-is-valid */}
        <br /><br />
        <button onClick={() => { props.setPing() }}>Start {props.isPinging ? 'pong' : 'ping'}ing</button>
        <br /><br />
        <button onClick={() => { props.stopFetching() }}>Stop fetching</button>
        <br /><br />
        <button onClick={() => { props.startFetching() }}>Start fetching</button>
      </nav>
    </div>
  )
}

Index.propTypes = {
  id: PropTypes.number.isRequired,
  isPinging: PropTypes.bool.isRequired,
  setInitialCharacter: PropTypes.func.isRequired,
  setPing: PropTypes.func.isRequired,
  stopFetching: PropTypes.func.isRequired,
  startFetching: PropTypes.func.isRequired,
}
export default Index
