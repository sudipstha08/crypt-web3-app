import { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import React from 'react'
import Head from 'next/head'
import { GlobalStyles } from '../styles/global-styles'
import '../styles/style.css'
import { TransactionProvider } from '../context/TransactionContext'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Momento</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <GlobalStyles />
      <TransactionProvider>
        <Component {...pageProps} />
      </TransactionProvider>
    </>
  )
}

export default MyApp
