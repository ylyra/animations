import { motion } from 'framer-motion'
import { useState } from 'react'
import useMeasure from 'react-use-measure'

import type { LinksFunction } from '@remix-run/node'
import stylesheet from './styles.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

export default function Example() {
  const [showExtraContent, setShowExtraContent] = useState(false)
  const [ref, { height }] = useMeasure()

  return (
    <div className="wrapper">
      <button className="button" onClick={() => setShowExtraContent((b) => !b)}>
        Toggle height
      </button>

      <motion.div className="element" animate={{ height }}>
        <div ref={ref} className="inner">
          <h1>Fake Family Drawer {height}</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          {showExtraContent ? (
            <p>
              This extra content will change the height of the drawer. Some even
              more content to make the drawer taller and taller and taller...
            </p>
          ) : null}
        </div>
      </motion.div>
    </div>
  )
}
