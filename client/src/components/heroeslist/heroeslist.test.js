import { render, screen } from '@testing-library/react';
import MockParentElement from './heroeslist.mocks'

test('It renders the un ordered list', () => {
  render(<MockParentElement/>)
  const listElement = screen.getByRole('list')
  expect(listElement).toBeInTheDocument()
})

test('It renders two list items when given two heroes', () => {
  render(<MockParentElement/>)
  const listItemElements = screen.getAllByRole('listitem')
  expect(listItemElements).toHaveLength(2)
})

test('It renders link items inside the list', () => {
  render(<MockParentElement/>)
  const linksList = screen.getAllByRole('link')
  expect(linksList).toHaveLength(2)
})

test('It renders the two mock heroes exactly', () => {
  render(<MockParentElement/>)
  const captainAmericaElement = screen.getByText('Captain America')
  const spiderManElement = screen.getByText('Spider-Man')
  expect(captainAmericaElement).toBeInTheDocument()
  expect(spiderManElement).toBeInTheDocument()
})
