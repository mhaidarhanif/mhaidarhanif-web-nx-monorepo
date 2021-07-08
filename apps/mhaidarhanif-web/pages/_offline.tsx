import { NextSeo } from 'next-seo'
import { Box } from 'theme-ui'

import { DefaultLayout } from '../layouts'

const AboutPage = () => {
  return (
    <DefaultLayout>
      <NextSeo title="Offline?" />

      <Box>
        <h1>Looks like you're offline</h1>
      </Box>
    </DefaultLayout>
  )
}

export default AboutPage
