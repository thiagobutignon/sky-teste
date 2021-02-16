import { Item } from '@/domain/models/movies-result-models'

export interface MovieGeneric {
  type: string
  title: string
  items: Item[]
}
