import React from 'react'
import Link from 'next/link'

const OtherPage = () => (
  <div>
    <h1>Other Page</h1>
    <Link href="/">
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a>Get back to home</a>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </Link>
  </div>
)

export default OtherPage
