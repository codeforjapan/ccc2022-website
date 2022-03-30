import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'

import theme from '@/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const siteName = 'Civictech Challenge Cup 2022'
  const description = '' // @TODO
  const baseUrl = 'https://ccc2022.code4japan.org'
  const ogp = `${baseUrl}/ogp.png` // @TODO replace new logo

  // const router = useRouter()

  // @TODO implement later
  // useEffect(() => {
  //   if (!gtag.GOOGLE_ANALYTICS_ID) return

  //   const handleRouteChange = (path: string) => gtag.pageview(path)
  //   const TYPE = 'routeChangeComplete'

  //   router.events.on(TYPE, handleRouteChange)
  //   return () => router.events.off(TYPE, handleRouteChange)
  // }, [router.events])

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{siteName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="keyword"
          content="Code for Japan, Civictech, Award, アワード, 審査, 協賛, コンテスト, Civictech Challenge Cup, シビックテック, 学生"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Code for Japan" />
        <meta name="description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogp} />
        <meta property="og:locale" content="ja_JP" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta name="fb:app_id" content="207490557254496" />
        <meta name="twitter:image" content={ogp} />
        <meta name="twitter:site" content="@codeforJP" />
        <meta name="twitter:creator" content="@codeforJP" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/letter-c.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@600;800&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
