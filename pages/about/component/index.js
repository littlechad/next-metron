import React from 'react'
import Link from 'next/link'
import Helmet from 'react-helmet'

const About = () => (
  <div>
    <Helmet
      title="Ini about | Hello next.js!"
      meta={[
        { property: 'og:title', content: 'ini about title' },
        { property: 'og:description', content: 'ini about description' },
      ]}
    />
    <h1>About Page</h1>
    {/* eslint-disable jsx-a11y/anchor-is-valid */}
    <Link href="/"><a>Go back home</a></Link><br />
    {/* eslint-enable jsx-a11y/anchor-is-valid */}
  </div>
)

export default About
