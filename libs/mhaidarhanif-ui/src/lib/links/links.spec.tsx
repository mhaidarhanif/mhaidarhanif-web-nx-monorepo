import { render } from '@testing-library/react'

import Links from './links'

describe('Links', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Links links={[]} />)
    expect(baseElement).toBeTruthy()
  })
})
