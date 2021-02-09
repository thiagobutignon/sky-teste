import { Item } from '@/domain/models/movies-result-models/item'
import { mockAvailableChannels, mockImages, mockIsPPVLinear, mockSecondaryAction, mockTags } from '@/domain/test/movies-result-models'
import faker from 'faker'

export const mockItem = (): Item => ({
  availableChannels: mockAvailableChannels(),
  title: faker.random.word(),
  menuAction: faker.random.word(),
  hashKey: faker.random.word(),
  isBlocked: faker.random.boolean(),
  images: mockImages(),
  categories: faker.random.words(),
  cast: faker.random.arrayElements(),
  programType: faker.random.word(),
  sheetType: faker.random.number(),
  description: faker.random.word(),
  shortDescription: faker.random.word(),
  year: faker.random.number(),
  schedules: faker.random.arrayElements(),
  action: faker.random.word(),
  secondaryActions: mockSecondaryAction(),
  tags: mockTags(),
  isCvod: faker.random.boolean(),
  isPPVLinear: mockIsPPVLinear(),
  canBeWatchedOn: [faker.random.word(),faker.random.word(),faker.random.word()],
  isElegible: faker.random.boolean(),
  isEligible: faker.random.boolean(),
  isAvailable: faker.random.boolean(),
  price: faker.random.word(),
  subtitle: faker.random.word(),
  priceDouble: faker.random.word(),
  provider: faker.random.word()
})

export const mockItems = (): Item[] => ([
  mockItem(),
  mockItem(),
  mockItem()
])
