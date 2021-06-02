import React from 'react'

import Link from 'next/link'

import ImageLoader from 'components/imageLoader'

import { bio } from 'data/bio'

export default function Toolbar() {
  function Logo() {
    return (
      <div className="p-col p-ml-4">
        <Link href="/">
          <a>
            <div style={{ width: 160, height: 32 }}>
              <ImageLoader src="/logo.svg" alt="Metolio Logo" />
            </div>
          </a>
        </Link>
      </div>
    )
  }

  function AppMenu() {
    return (
      <Link href="https://github.com/dbroadhurst/metolio">
        <a>
          <div className="p-mr-4" style={{ width: 40, height: 40 }}>
            <ImageLoader src={bio.darkTheme ? '/github-light.png' : '/github-dark.png'} alt="avatar" />
          </div>
        </a>
      </Link>
    )
  }

  return (
    <header style={{ height: 64 }} className="p-d-flex p-justify-start p-align-center p-shadow-8 p-m-0 p-p-0">
      <Logo />
      <AppMenu />
    </header>
  )
}
