import { render, screen } from '@testing-library/react'
import Home from '../src/pages'

describe('Home', () => {
  it('renders a title', () => {
    render(<Home />)

    const title = screen.getByText('ALIEN REGRETS')

    expect(title).toBeInTheDocument()
  })
})