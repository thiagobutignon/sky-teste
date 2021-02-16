import React from 'react'
import { MovieItem } from '@/presentation/components'
import { render, screen } from '@testing-library/react'
import { mockItem } from '@/domain/test/movies-result-models'

const makeSut = (item = mockItem()): void => {
  render(<MovieItem item={item} />)
}

describe('MovieItem Component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
        setState: jest.fn()
      }))
    })
  })
  test('Should render with correct values', () => {
    const item = mockItem()
    makeSut(item)
    expect(screen.getByTestId('movie-item-image-url')).toHaveProperty(
      'src',
      `${item.images[0].url + '/'}`
    )
  })
})
