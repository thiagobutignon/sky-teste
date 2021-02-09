import { MoviesResultModel } from '@/domain/models'

export interface LoadMovies {
  load: () => Promise<LoadMovies.ResultModel>
}

export namespace LoadMovies {
  export type ResultModel = MoviesResultModel
}
