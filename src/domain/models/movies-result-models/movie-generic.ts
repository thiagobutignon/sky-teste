import { Item, Movie } from '@/domain/models/movies-result-models'

export interface MovieGeneric {
  type: string
  title?: string
  items?: Item[]
  movies?: Movie[]
}
