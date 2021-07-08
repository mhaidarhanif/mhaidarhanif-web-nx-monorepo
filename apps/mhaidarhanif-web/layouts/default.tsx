import { Flex, Box, Container } from 'theme-ui'

import { Header, Footer } from '@mhaidarhanif-platform/mhaidarhanif-ui'

export const DefaultLayout = ({ children }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
      }}
    >
      <Header />
      <Flex sx={{ justifyContent: 'center' }}>
        <Box
          sx={{
            width: '100%',
            flex: '1 1 auto',
            minHeight: '100vh',
            px: 4,
          }}
        >
          {children}
        </Box>
      </Flex>
      <Footer />
    </Container>
  )
}
