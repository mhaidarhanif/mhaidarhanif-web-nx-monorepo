import { Heading, Box } from 'theme-ui'

import { BlogPosts } from '../components'

export const HomePosts = () => {
  return (
    <Box sx={{ my: '5em', maxWidth: '840px' }}>
      <Heading as="h1">My blog posts</Heading>
      <BlogPosts />
    </Box>
  )
}

export default HomePosts
