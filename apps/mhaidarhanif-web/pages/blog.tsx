import { NextSeo } from 'next-seo'
import { Flex, Heading, Text } from 'theme-ui'

import { DefaultLayout } from '../layouts'

const BlogPage = () => {
  return (
    <DefaultLayout>
      <NextSeo
        title="Blog posts and writings by M Haidar Hanif"
        description="Mostly insights on life and technology"
      />

      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Heading as="h1" sx={{ variant: 'styles.h1' }}>
          Blog
        </Heading>
        <Heading as="h2" sx={{ variant: 'styles.h2' }}>
          Blog posts and writings
        </Heading>
      </Flex>
    </DefaultLayout>
  )
}

export default BlogPage
