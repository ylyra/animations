'use client'
import { lazy, Suspense } from 'react'

import type { LinksFunction } from '@remix-run/node'
import stylesheet from './styles.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

const Game = lazy(() => import('./game'))

export default function SharedLayout() {
  return (
    <Suspense>
      <Game />
    </Suspense>
  )
}
