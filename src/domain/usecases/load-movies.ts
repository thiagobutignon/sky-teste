import { Movie, Item } from '@/domain/models/movies-result-models'

export interface LoadMovies {
  load: () => Promise<LoadMovies.ResultModel>
}

export namespace LoadMovies {
  export type ResultModel = {
    items: Item[]
    movies: Movie[]
  }
}
