import { NextSeo } from 'next-seo'
import { Box } from 'theme-ui'

import { DefaultLayout } from '../layouts'

const ResumePage = () => {
  return (
    <DefaultLayout>
      <NextSeo
        title="Resume or CV of M Haidar Hanif"
        description="When credibility want to be asked"
      />

      <Box>
        <h1>Resume page</h1>
      </Box>
    </DefaultLayout>
  )
}

export default ResumePage
