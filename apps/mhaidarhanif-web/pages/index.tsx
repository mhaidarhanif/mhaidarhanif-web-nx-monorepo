import NextImage from 'next/image'
import { NextSeo } from 'next-seo'
import { Flex, Box, Button, Heading, Text, Link } from 'theme-ui'

import { DefaultLayout } from '../layouts'
import { HomeHero, HomePosts } from '../components'

const HomePage = () => {
  return (
    <DefaultLayout>
      <NextSeo title="M Haidar Hanif" />

      <HomeHero />
      <HomePosts />
    </DefaultLayout>
  )
}

export default HomePage
