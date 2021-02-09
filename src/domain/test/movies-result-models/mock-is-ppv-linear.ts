import { IsPPVLinear } from '@/domain/models/movies-result-models/is-ppv-linear'
import faker from 'faker'

export const mockIsPPVLinear = (): IsPPVLinear => ({
  availablePayPerViewLinear: faker.random.boolean(),
  technology: [faker.random.word(), faker.random.word(), faker.random.word()]
})
