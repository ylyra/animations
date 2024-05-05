'use client'

import type { LinksFunction } from '@remix-run/node'
import stylesheet from './styles.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

export default function SmoothButton() {
  return (
    <>
      <button className="blue-button" />
    </>
  )
}
