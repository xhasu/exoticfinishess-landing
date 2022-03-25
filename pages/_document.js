import { Html, Head, Main, NextScript } from 'next/document'
import LayoutMain from "components/layouts/main"

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/css/fonts.css" />
      </Head>
      <body className="font-serif">
        <LayoutMain>
          <Main />
        </LayoutMain>
        <NextScript />
      </body>
    </Html>
  )
}