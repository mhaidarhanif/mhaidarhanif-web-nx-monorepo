import NextImage from 'next/image'
import { NextSeo } from 'next-seo'
import { Flex, Box, Button, Heading, Text, Link } from 'theme-ui'

import { DefaultLayout } from '../layouts'

const HomePage = () => {
  return (
    <DefaultLayout>
      <NextSeo title="M Haidar Hanif" />

      <Flex
        id="home-hero"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          pt: '100px',
        }}
      >
        <Flex
          id="home-hero-content"
          sx={{
            pb: 5,
            maxWidth: '850px',
            borderBottom: '1px solid',
            borderColor: 'primary',
          }}
        >
          <Box
            className="next-image-box"
            sx={{
              minWidth: '250px',
            }}
          >
            <NextImage
              src="/mhaidarhanif.jpg"
              alt="Profile photo of  M Haidar Hanif"
              width={250}
              height={250}
              layout="fixed"
            />
          </Box>

          <Box sx={{ ml: 5 }}>
            <Heading
              as="h1"
              sx={{
                variant: 'styles.h1',
              }}
            >
              Hi there! I’m Haidar
            </Heading>
            <Heading
              as="h2"
              sx={{
                variant: 'styles.h2',
              }}
            >
              Helping people to become become better at what they do is my life
              and work mission.
            </Heading>
            <Text
              as="p"
              sx={{
                margin: '0 0 1em',
              }}
            >
              Currently developing Catamyst, an education technology and
              software company to bring that mission forward. Especially in tech
              career, web app development, software engineering, and startup
              building.
            </Text>
            <Box>
              <Button variant="primary">Say Hello</Button>
              <Link
                variant="button"
                href="https://google.com/search?q=m+haidar+hanif"
                target="_blank"
              >
                <Button
                  variant="secondary"
                  sx={{
                    marginInlineStart: 3,
                  }}
                >
                  Surprise Me
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </DefaultLayout>
  )
}

export default HomePage
