import React from 'react'
import Link from 'next/link'

import Info from './info'

const Index = () => (
  <div>
    <h1>Index Page</h1>
    <Info />
    <br />
    <nav>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <Link href="/other"><a>Navigate to other</a></Link>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </nav>
  </div>
)

export default Index
