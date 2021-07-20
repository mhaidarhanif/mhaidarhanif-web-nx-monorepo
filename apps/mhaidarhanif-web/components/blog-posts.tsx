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

export const BlogPosts = () => {
  return (
    <Grid columns={1} gap={4} mt={4}>
      {blogPosts.map((post) => {
        return <BlogPostCard key={post.slug} post={post} />
      })}
    </Grid>
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
          border: '3px solid transparent',
          '&:hover': {
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            borderColor: 'primary',
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
