/** @jsxImportSource theme-ui */

import NextLink from 'next/link'
import { Flex, Link, NavLink, Button, useColorMode } from 'theme-ui'

/* eslint-disable-next-line */
export interface HeaderProps {}

const modes = ['default', 'dark', 'midnight', 'laser']

const getColorModeName = (mode: string) => {
  switch (mode) {
    case 'default':
    case 'light':
      return 'Light'
    case 'dark':
      return 'Dark'
    case 'midnight':
      return 'Midnight'
    case 'laser':
      return 'Laser'
    default:
      return mode
  }
}

export function Header(props: HeaderProps) {
  const [mode, setMode] = useColorMode()

  const cycleColorMode = () => {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)
  }

  return (
    <header
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 3,
      }}
    >
      <div>
        <NextLink href="/" passHref>
          <NavLink
            sx={{
              variant: 'styles.brand',
              px: 3,
              py: 1,
              textTransform: 'uppercase',
              border: '3px solid',
              '&:hover': {
                borderStyle: 'dashed solid',
              },
            }}
          >
            <span>M Haidar Hanif</span>
          </NavLink>
        </NextLink>
      </div>

      <Flex
        as="nav"
        sx={{
          alignItems: 'center',
        }}
      >
        <Button variant="toggle" onClick={cycleColorMode} mr={3}>
          {getColorModeName(mode)}
        </Button>
        <NextLink href="/" passHref>
          <NavLink>Home</NavLink>
        </NextLink>
        <NextLink href="/about" passHref>
          <NavLink>About</NavLink>
        </NextLink>
        <NextLink href="/blog" passHref>
          <NavLink>Blog</NavLink>
        </NextLink>
        <NextLink href="/resume" passHref>
          <NavLink>Resume</NavLink>
        </NextLink>
        <NavLink href="https://catamyst.com" target="_blank" rel="noreferrer">
          Catamyst
        </NavLink>
      </Flex>
    </header>
  )
}

export default Header
