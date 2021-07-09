import NextLink from 'next/link'
import { NextSeo } from 'next-seo'
import { Box, Button } from 'theme-ui'

import { DefaultLayout } from '../layouts'

const Custom404 = () => {
  return (
    <DefaultLayout>
      <NextSeo title="Page not found? - M Haidar Hanif" />

      <Box>
        <h1>This page could not be found.</h1>
        <p>
          Usually called <b>404 error</b>.
        </p>
        <NextLink href="/" passHref>
          <Button as="a">Back to home</Button>
        </NextLink>
      </Box>
    </DefaultLayout>
  )
}

export default Custom404
