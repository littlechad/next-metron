import React from 'react'
import Link from 'next/link'
import Helmet from 'react-helmet'

const Other = () => (
  <div>
    <Helmet
      title="Ini other | Hello next.js!"
      meta={[
        { property: 'og:title', content: 'ini other title' },
        { property: 'og:description', content: 'ini other description' },
      ]}
    />
    <h1>Other Page</h1>
    {/* eslint-disable jsx-a11y/anchor-is-valid */}
    <Link href="/"><a>Get back to home</a></Link><br />
    <Link href="/about"><a>Navigate to about</a></Link>
    {/* eslint-enable jsx-a11y/anchor-is-valid */}
  </div>
)

export default Other
