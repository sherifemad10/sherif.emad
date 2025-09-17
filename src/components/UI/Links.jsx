import Link from 'next/link'
import React from 'react'

const Links = () => {
  return (
    <nav>
      <ul>
        <il><Link href='/'>Home</Link></il>
        <il><Link href='cerificates'>Certificates</Link></il>
        <il><Link href='/'>Projects</Link></il>
      </ul>

    </nav>
  )
}

export default Links