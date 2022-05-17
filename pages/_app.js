import 'styles/application.css'
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="googletagmanager">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NV4Q5VM');`}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
