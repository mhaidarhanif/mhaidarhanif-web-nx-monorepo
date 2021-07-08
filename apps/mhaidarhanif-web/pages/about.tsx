import { NextSeo } from 'next-seo'
import { Box } from 'theme-ui'

import { DefaultLayout } from '../layouts'

const AboutPage = () => {
  return (
    <DefaultLayout>
      <NextSeo
        title="About M Haidar Hanif"
        description="Bit more details about M Haidar Hanif"
        openGraph={{
          description: 'Bit more details about M Haidar Hanif',
        }}
      />

      <Box>
        <h1>About page</h1>
      </Box>
    </DefaultLayout>
  )
}

export default AboutPage
