import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import './styles.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>M Haidar Hanif</title>
      </Head>

      <div>
        <header>
          <h1>M Haidar Hanif</h1>
        </header>

        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default CustomApp
