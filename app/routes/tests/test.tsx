/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { motion } from 'framer-motion'
import { useState } from 'react'
import stylesheet from './styles.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  const [open, setOpen] = useState(false)

  return (
    <div className="grid h-dvh place-items-center">
      <motion.div
        onClick={() => setOpen((t) => !t)}
        className=" bg-[#fad658]"
        style={
          open
            ? {
                position: 'fixed',
                inset: 0,
                width: '100%',
                height: '100%',
                borderRadius: 0,
              }
            : { height: 48, width: 48, borderRadius: 12 }
        }
        layout
      />
    </div>
  )
}
