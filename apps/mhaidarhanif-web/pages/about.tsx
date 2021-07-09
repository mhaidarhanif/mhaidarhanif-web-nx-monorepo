import { NextSeo } from 'next-seo'
import { Flex, Heading, Text } from 'theme-ui'

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

      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Heading as="h1" sx={{ variant: 'styles.h1' }}>
          About
        </Heading>
        <Heading as="h2" sx={{ variant: 'styles.h2' }}>
          Educator + Developer + Designer
        </Heading>
      </Flex>
    </DefaultLayout>
  )
}

export default AboutPage
