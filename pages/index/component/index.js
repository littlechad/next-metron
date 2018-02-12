import React from 'react'
import Link from 'next/link'
import Helmet from 'react-helmet'

import Info from '../container/info'

const Index = () => (
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
    </nav>
  </div>
)

export default Index
