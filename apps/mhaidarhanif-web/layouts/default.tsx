import { Box, Container } from 'theme-ui'

import { Header, Footer } from '@mhaidarhanif-platform/mhaidarhanif-ui'

export const DefaultLayout = ({ children }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box
        p={3}
        bg="muted"
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Container>
  )
}
