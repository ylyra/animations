import type { LinksFunction } from '@remix-run/node'
import { motion } from 'framer-motion'
import { useState } from 'react'
import stylesheet from './styles.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

export default function Example() {
  const [showSecond, setShowSecond] = useState(false)

  return (
    <div className="wrapper">
      <button
        className="bg-white p-2 px-4 rounded-lg text-sm text-black"
        onClick={() => setShowSecond((s) => !s)}
      >
        Animate
      </button>

      {showSecond ? (
        <motion.div
          layoutId="rectangle"
          className="size-24 bg-[#fad658]"
          style={{
            borderRadius: 12,
          }}
        />
      ) : (
        <motion.div
          layoutId="rectangle"
          className="size-12 bg-[#fad658]"
          style={{
            borderRadius: 12,
          }}
        />
      )}
    </div>
  )
}
