import { Box, Flex, Text } from 'theme-ui'

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Box
      as="footer"
      p="3"
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Text variant="caps">Copyright &copy; M Haidar Hanif</Text>
    </Box>
  )
}

export default Footer
