import {
  Image,
  SecondaryAction,
  Tags,
  IsPPVLinear,
  AvailableChannel
} from '@/domain/models/movies-result-models'

export type Item = {
  availableChannels?: [AvailableChannel]
  title?: string
  menuAction: string
  hashKey?: string
  isBlocked?: boolean
  images?: [Image]
  categories?: string
  cast?: []
  programType?: string
  sheetType?: number
  description?: string
  shortDescription?: string
  year?: number
  schedules?: []
  action?: string
  secondaryActions?: SecondaryAction
  tags?: Tags
  isCvod?: boolean
  isPPVLinear?: IsPPVLinear
  canBeWatchedOn?: [string]
  isElegible?: false
  isEligible?: false
  isAvailable?: true
  price?: string
  subtitle?: string
  priceDouble?: any
  provider?: string
}
