import { render } from '@testing-library/react'

import MhaidarhanifUi from './mhaidarhanif-ui'

describe('MhaidarhanifUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MhaidarhanifUi />)
    expect(baseElement).toBeTruthy()
  })
})
