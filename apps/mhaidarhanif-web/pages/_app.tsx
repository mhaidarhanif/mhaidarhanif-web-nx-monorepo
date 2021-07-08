import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'theme-ui'

import { theme } from '@mhaidarhanif-platform/mhaidarhanif-ui'

import './styles.css'
import SEO from '../next-seo.config'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO} />

      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default CustomApp
