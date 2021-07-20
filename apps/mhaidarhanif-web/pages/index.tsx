import { NextSeo } from 'next-seo'

import { DefaultLayout } from '../layouts'
import { HomeHero } from '../components'

const HomePage = () => {
  return (
    <DefaultLayout>
      <NextSeo title="M Haidar Hanif" />

      <HomeHero />
    </DefaultLayout>
  )
}

export default HomePage
