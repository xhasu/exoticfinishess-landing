import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/css/fonts.css" />
      </Head>
      <body className="font-century">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}