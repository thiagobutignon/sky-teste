import { AvailableChannel } from '@/domain/models/movies-result-models'
import faker from 'faker'

export const mockAvailableChannel = (): AvailableChannel => ({
  hashKey: faker.random.uuid(),
  title: faker.random.words(),
  shortDescription: faker.random.words(),
  isElegible: faker.random.boolean(),
  number: faker.random.number(),
  type: faker.random.number(),
  highlights: {
    items: []
  }
})
