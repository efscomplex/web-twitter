import * as React from 'react'
import { render } from '@testing-library/react'
import { expect } from 'chai'
import App from '@/App'

describe('<App>', () => {
  it('renders the header', () => {
    const { getByText } = render(<App />)
    const header = getByText(/header/i)
    expect(document.body.contains(header))
  })
})
