'use client'

import type { LinksFunction } from '@remix-run/node'
import stylesheet from './styles.css?url'
import { TrashAnimation } from './trash-animation'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

export default function SmoothButton() {
  return (
    <div className="h-screen items-center justify-center flex">
      <TrashAnimation />
    </div>
  )
}
