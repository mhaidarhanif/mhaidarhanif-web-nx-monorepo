import NextLink from 'next/link'
import NextImage from 'next/image'
import { Grid, Card, Heading, Box, Text } from 'theme-ui'

export const blogPosts = [
  {
    imageUrl: 'http://placekitten.com/g/200/200',
    slug: 'hello-world',
    title: 'Hello World',
    description: 'This is the short description about the post.',
  },
  {
    imageUrl: 'http://placekitten.com/g/200/200',
    slug: 'hello-universe',
    title: 'Hello Universe',
    description: 'This is the short description about the post.',
  },
  {
    imageUrl: 'http://placekitten.com/g/200/200',
    slug: 'hello-multiverse',
    title: 'Hello Multiverse',
    description: 'This is the short description about the post.',
  },
]

export const HomePosts = () => {
  return (
    <Box
      sx={{
        my: '5em',
        maxWidth: '840px',
      }}
    >
      <Heading as="h1">My blog posts</Heading>
      <Grid columns={1} gap={4} mt={4}>
        {blogPosts.map((post) => {
          return <BlogPostCard key={post.slug} post={post} />
        })}
      </Grid>
    </Box>
  )
}

export const BlogPostCard = ({ post }) => {
  return (
    <NextLink href={`/blog/${post.slug}`}>
      <Card
        sx={{
          display: 'flex',
          margin: '0 auto',
          width: '100%',
          flexDirection: ['column', 'row'],
          '&:hover': {
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            transform: 'scale(1.02)',
          },
        }}
      >
        <Box className="next-image-box">
          <NextImage
            src={post.imageUrl}
            alt={post.title}
            width={150}
            height={150}
            layout="fixed"
          />
        </Box>
        <Box
          sx={{
            mt: [3, 0],
            ml: [0, 5],
          }}
        >
          <code>/{post.slug}</code>
          <Heading as="h1" mt={2}>
            {post.title}
          </Heading>
          <Text as="p" mt={3}>
            {post.description}
          </Text>
        </Box>
      </Card>
    </NextLink>
  )
}

export default HomePosts
