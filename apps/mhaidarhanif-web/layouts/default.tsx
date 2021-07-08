import { Container } from 'theme-ui'

import { Header, Footer } from '@mhaidarhanif-platform/mhaidarhanif-ui'

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container p={3} bg="muted">
        {children}
      </Container>
      <Footer />
    </>
  )
}
