import { Html, Head, Main, NextScript } from 'next/document'
import LayoutMain from "components/layouts/main"

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <LayoutMain>
          <Main />
        </LayoutMain>
        <NextScript />
      </body>
    </Html>
  )
}