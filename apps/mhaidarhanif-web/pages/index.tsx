import { NextSeo } from 'next-seo'
import { Container, Box, Button } from 'theme-ui'

import { DefaultLayout } from '../layouts'

const HomePage = () => {
  return (
    <DefaultLayout>
      <NextSeo title="M Haidar Hanif" />

      <Box sx={{ mb: 4 }}>
        <h1>Hi there! I’m Haidar</h1>
        <h2>
          Helping people to become become better at what they do is my life and
          work mission.
        </h2>
        <p>
          Currently developing Catamyst, an education technology and software
          company to bring that mission forward. Especially in tech career, web
          app development, software engineering, and startup building.
        </p>
        <Button variant="primary">Say Hello</Button>
        <Button variant="secondary">Surprise Me</Button>
      </Box>
    </DefaultLayout>
  )
}

export default HomePage
