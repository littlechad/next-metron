import React from 'react'
import Link from 'next/link'

import Info from './info'

const Index = () => (
  <div>
    <h1>Index Page</h1>
    <Info />
    <br />
    <nav>
      <Link href='/other'><a>Navigate to "/other"</a></Link>
    </nav>
  </div>
)

export default Index
