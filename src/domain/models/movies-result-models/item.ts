import {
  Image,
  SecondaryAction,
  Tags,
  IsPPVLinear,
  AvailableChannel
} from '@/domain/models/movies-result-models'

export type Item = {
  availableChannels: AvailableChannel[]
  title: string
  menuAction: string
  hashKey: string
  isBlocked: boolean
  images: Image[]
  categories: string
  cast: any[]
  programType: string
  sheetType: number
  description: string
  shortDescription: string
  year: number
  schedules: any[]
  action: string
  secondaryActions: SecondaryAction
  tags: Tags
  isCvod: boolean
  isPPVLinear: IsPPVLinear
  canBeWatchedOn: string[]
  isElegible: boolean
  isEligible: boolean
  isAvailable: boolean
  price: string
  subtitle: string
  priceDouble: any
  provider: string
}
