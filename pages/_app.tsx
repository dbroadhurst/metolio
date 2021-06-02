import React from 'react'

import type { AppProps } from 'next/app'

import PrimeReact from 'primereact/api'

import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import '../styles/globals.scss'

import Toolbar from 'components/toolbar'

PrimeReact.ripple = true

export default function Metolio({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toolbar />
      <Component {...pageProps} />
    </>
  )
}
