import Link from 'next/link'
import React from 'react'

const BackButton = () => {
  return (
    <div>
      <Link href="/">
      <button className="text-xl font-bold text-white  p-2 rounded-lg border-2 border-gray-600 hover:bg-gray-700 transition my-5 cursor-pointer">
        &larr; Back
      </button>
      </Link>
    </div>
  )
}

export default BackButton
