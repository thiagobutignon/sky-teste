import { Image } from '@/domain/models/movies-result-models'
import faker from 'faker'

export const mockImage = (): Image => ({
  width: faker.random.number(),
  height: faker.random.number(),
  type: faker.random.number(),
  isS3: faker.random.boolean(),
  url: faker.internet.url()
})

export const mockImages = (): Image[] => ([
  mockImage(),
  mockImage(),
  mockImage()
])
