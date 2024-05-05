'use client'

import type { LinksFunction } from '@remix-run/node'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Spinner } from './spinner'
import stylesheet from './styles.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

const buttonCopy = {
  idle: 'Send me a login link',
  loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
  success: 'Login link sent!',
}

export default function SmoothButton() {
  const [buttonState, setButtonState] =
    useState<keyof typeof buttonCopy>('idle')

  return (
    <div className="outer-wrapper">
      <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />
      <button
        className="blue-button"
        disabled={buttonState === 'loading'}
        onClick={() => {
          if (buttonState === 'success') return

          setButtonState('loading')

          setTimeout(() => {
            setButtonState('success')
          }, 1750)

          setTimeout(() => {
            setButtonState('idle')
          }, 3500)
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            key={buttonState}
          >
            {buttonCopy[buttonState]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  )
}
