import { mockAvailableChannels, mockImages } from '@/domain/test/movies-result-models'
import { Movie } from '@/domain/models/movies-result-models'
import faker from 'faker'

export const mockMovie = (): Movie => ({
  availableChannels: mockAvailableChannels(),
  title: faker.random.word(),
  isBlocked: faker.random.boolean(),
  images: mockImages(),
  categories: faker.random.word(),
  cast: faker.random.arrayElements(),
  programId: faker.random.word(),
  programType: faker.random.word(),
  sheetType: faker.random.number(),
  duration: faker.random.number(),
  parentalRating: faker.random.word(),
  description: faker.random.word(),
  shortDescription: faker.random.word(),
  year: faker.random.number()
})

export const mockMovies = (): Movie[] => ([
  mockMovie(),
  mockMovie(),
  mockMovie()
])
