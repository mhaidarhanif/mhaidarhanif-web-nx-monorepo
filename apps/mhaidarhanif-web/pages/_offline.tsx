import { NextSeo } from 'next-seo'
import { Box } from 'theme-ui'

import { DefaultLayout } from '../layouts'

const AboutPage = () => {
  return (
    <DefaultLayout>
      <NextSeo title="Offline? - M Haidar Hanif" />

      <Box>
        <h1>Looks like you're offline</h1>
        <p>Try to refresh or check your connection</p>
      </Box>
    </DefaultLayout>
  )
}

export default AboutPage
