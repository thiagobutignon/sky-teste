import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import { render, screen, waitFor } from '@testing-library/react'
import { Home } from '@/presentation/pages'

import { LoadMoviesSpy } from '@/domain/test'

type SutTypes = {
  loadMoviesSpy: LoadMoviesSpy
  history: MemoryHistory
}

const makeSut = (loadMoviesSpy = new LoadMoviesSpy()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  render(
    <Router history={history}>
      <Home loadMovies={loadMoviesSpy} />
    </Router>
  )

  return { loadMoviesSpy, history }
}

describe('Home', () => {
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
  test('Should render MovieItems on success', async () => {
    makeSut()
    const movieItems = screen.getByTestId('movies-list')
    await waitFor(() => movieItems)
    expect(screen.queryByTestId('error')).not.toBeInTheDocument()
  })
})
