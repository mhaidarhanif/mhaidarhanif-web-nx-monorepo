import { Button, useColorMode } from 'theme-ui'

/* eslint-disable-next-line */
export interface HeaderProps {}

const modes = ['default', 'dark', 'midnight', 'laser']

const getColorModeName = (mode: string) => {
  switch (mode) {
    case 'dark':
      return 'Dark'
    case 'midnight':
      return 'Midnight'
    case 'laser':
      return 'Laser'
    case 'light':
    case 'default':
      return 'Light'
    case undefined:
      return '   '
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
    <div>
      <h1>M Haidar Hanif</h1>
      <Button onClick={cycleColorMode}>{getColorModeName(mode)}</Button>
    </div>
  )
}

export default Header
