import type { MetaFunction } from '@remix-run/node'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  return (
    <div className="grid h-dvh place-items-center">
      <button
        className="bg-white p-2 px-4 rounded-lg text-sm text-black"
        onClick={() => setShouldAnimate((s) => !s)}
      >
        Animate
      </button>

      <motion.div
        className="size-12 bg-[#fad658] rounded-xl"
        animate={{
          scale: shouldAnimate ? 1.5 : 1,
          y: shouldAnimate ? -40 : 0,
        }}
      />
    </div>
  )
}
