import { NextSeo } from 'next-seo'
import { Box } from 'theme-ui'

import { DefaultLayout } from '../layouts'

const BlogPage = () => {
  return (
    <DefaultLayout>
      <NextSeo
        title="Blog posts and writings by M Haidar Hanif"
        description="Mostly insights on life and technology"
      />

      <Box>
        <h1>Blog page</h1>
      </Box>
    </DefaultLayout>
  )
}

export default BlogPage
