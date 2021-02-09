import { SecondaryAction } from '@/domain/models/movies-result-models/secondary-action'
import faker from 'faker'

export const mockSecondaryAction = (): SecondaryAction => ({
  setAlarm: faker.random.boolean(),
  record: faker.random.boolean(),
  isAvailable: faker.random.boolean()
})
