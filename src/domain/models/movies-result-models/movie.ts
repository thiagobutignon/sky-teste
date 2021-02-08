import { AvailableChannel, Image } from '@/domain/models/movies-result-models'

export interface Movie {
  availableChannels: [AvailableChannel]
  title: string
  isBlocked: boolean
  images: [Image]
  categories: string
  cast: []
  programId: string
  programType: string
  sheetType: number
  duration: number
  parentalRating: string
  description: string
  shortDescription: string
  year: number
}
