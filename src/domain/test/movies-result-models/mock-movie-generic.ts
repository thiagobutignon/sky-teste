import { mockItems, mockMovies } from '@/domain/test/movies-result-models'
import { MovieGeneric } from '@/domain/models/movies-result-models'
import faker from 'faker'

export const mockMovieGeneric = (): MovieGeneric => ({
  type: faker.random.word(),
  title: faker.random.word(),
  items: mockItems(),
  movies: mockMovies()
})

export const mockMovieGenerics = (): MovieGeneric[] => ([
  mockMovieGeneric(),
  mockMovieGeneric(),
  mockMovieGeneric()
])
