import 'styles/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next Chat</title>
        <meta name="description" content="Next.jsで作ったチャットサービス" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
export default MyApp
