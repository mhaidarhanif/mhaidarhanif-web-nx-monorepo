import { NextSeo } from 'next-seo'
import { Flex, Heading, Text } from 'theme-ui'

import { DefaultLayout } from '../layouts'

const ResumePage = () => {
  return (
    <DefaultLayout>
      <NextSeo
        title="Resume or CV of M Haidar Hanif"
        description="When credibility want to be asked"
      />

      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Heading as="h1" sx={{ variant: 'styles.h1' }}>
          Resume of M Haidar Hanif
        </Heading>
        <Heading as="h2" sx={{ variant: 'styles.h2' }}>
          Full Stack Web App Developer and Educator
        </Heading>
      </Flex>
    </DefaultLayout>
  )
}

export default ResumePage
