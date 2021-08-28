import crypto from 'crypto'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const cspHashOf = (text: string) => {
  const hash = crypto.createHash('sha256')
  hash.update(text)
  return `'sha256-${hash.digest('base64')}'`
}
export default class MyDocument extends Document {
  render() {
    const nonce = cspHashOf(NextScript.getInlineScriptSource(this.props))
    let csp = `default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:`
    if (process.env.NODE_ENV !== 'production') {
      csp = `default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; script-src 'self' 'unsafe-eval'`
    }

    return (
      <Html>
        <Head nonce={nonce}>
          <meta httpEquiv="Content-Security-Policy" content={csp} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
