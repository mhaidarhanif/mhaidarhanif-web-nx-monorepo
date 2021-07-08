import { Flex, Text } from 'theme-ui'

import packageData from '../../../../../package.json'

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const date = new Date()
  const fullYear = date.getFullYear()

  return (
    <Flex
      as="footer"
      sx={{
        p: 4,
        mt: '5em',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Text as="p" variant="caps">
        M Haidar Hanif &copy; {fullYear}
      </Text>
      <Text variant="versionNumber">v{packageData.version}</Text>
    </Flex>
  )
}

export default Footer
