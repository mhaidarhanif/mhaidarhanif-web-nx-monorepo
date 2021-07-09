import NextImage from 'next/image'
import { Flex, Box, Button, Heading, Text, Link } from 'theme-ui'

import { LinkAnchor } from '@mhaidarhanif-platform/mhaidarhanif-ui'
import { SocialLinks } from '../components'

export const HomeHero = () => {
  return (
    <Flex
      id="home-hero"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        pt: ['50px', '100px'],
      }}
    >
      <Flex
        id="home-hero-content"
        sx={{
          pb: 5,
          maxWidth: '850px',
          flexDirection: ['column', 'row'],
          alignItems: ['center', 'flex-start'],
        }}
      >
        <Box className="next-image-box" sx={{ minWidth: '268px' }}>
          <NextImage
            src="/mhaidarhanif.jpg"
            alt="Profile photo of  M Haidar Hanif"
            layout="intrinsic"
            width={268}
            height={268}
          />
        </Box>

        <Box
          sx={{
            mt: [4, 0],
            ml: [0, 5],
            maxWidth: ['550px', '100%'],
          }}
        >
          <Heading as="h1" sx={{ variant: 'styles.h1' }}>
            Hi there! I’m Haidar
          </Heading>
          <Heading as="h2" sx={{ variant: 'styles.h2' }}>
            Helping people to become become better at what they do is my life
            and work mission.
          </Heading>
          <Text as="p" sx={{ variant: 'styles.p' }}>
            Currently founding{' '}
            <LinkAnchor href="https://catamyst.com">Catamyst</LinkAnchor>, an
            education technology and software company to bring that mission
            forward. Especially in tech career, web app development, software
            engineering, and startup building.
          </Text>
          <Text as="p" sx={{ variant: 'styles.p' }}>
            Previously co-founding <b>Impact Byte</b>, teaching at{' '}
            <b>Hacktiv8</b>, teaching at <b>Agnium</b>, coding at{' '}
            <b>AMPlified</b>, working as <b>freelancer</b>.
          </Text>
          <SocialLinks />
        </Box>
      </Flex>
    </Flex>
  )
}

export default HomeHero
