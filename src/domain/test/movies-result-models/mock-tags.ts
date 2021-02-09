import { Tags } from '@/domain/models/movies-result-models'
import faker from 'faker'

export const mockTags = (): Tags => ({
  contentType: faker.random.word(),
  price: faker.random.number().toString(),
  provider: faker.random.word()
})
