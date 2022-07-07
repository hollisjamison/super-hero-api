import { render, screen } from '@testing-library/react'
import Error from './error'

test('The error page renders successfully', () => {
  render(<Error/>)
  const errorElement = screen.getByText("404 No page found!")
  expect(errorElement).toBeInTheDocument()
})