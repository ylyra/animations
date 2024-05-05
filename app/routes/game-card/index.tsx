'use client'

import type { LinksFunction } from '@remix-run/node'
import { lazy, Suspense } from 'react'
import stylesheet from './styles.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

const StyledWithoutDrag = lazy(() => import('./card'))

export default function Page() {
  return (
    <Suspense>
      <StyledWithoutDrag />
    </Suspense>
  )
}
