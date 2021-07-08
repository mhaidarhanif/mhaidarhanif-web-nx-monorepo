import { ThemeProvider } from 'theme-ui'
import { render } from '@testing-library/react'

import { theme } from '@mhaidarhanif-platform/mhaidarhanif-ui'

import Header from './header'

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
