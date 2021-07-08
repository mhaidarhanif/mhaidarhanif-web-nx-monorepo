import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'theme-ui'

import './styles.css'
import theme from '../theme'
import SEO from '../next-seo.config'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />

      <ThemeProvider theme={theme}>
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}

export default CustomApp
