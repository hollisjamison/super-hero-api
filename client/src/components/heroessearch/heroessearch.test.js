import { render, screen, fireEvent } from '@testing-library/react'
import HeroesSearch from './heroessearch'
import MockParentElement from './heroessearch.mocks'

test('It renders an input box', () => {
  render(<HeroesSearch/>)
  const inputElement = screen.getByRole("textbox")
  expect(inputElement).toBeInTheDocument()
})

test('When first rendered, the searchbox should be empty', () => {
  render(<HeroesSearch />)
  const inputElement = screen.getByRole('textbox')
  expect(inputElement.value).toEqual('')
})

test('When the input box is typed in, the value of the box changes', () => {
  render(<MockParentElement />)
  const inputElement = screen.getByRole('textbox')
  const mockInput = 'Test Value'
  fireEvent.change(inputElement, { target: { value: mockInput} })
  expect(inputElement.value).toEqual(mockInput)
})