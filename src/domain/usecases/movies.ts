import { MoviesResultModel } from '@/domain/models'

export interface Movies {
  load: () => Promise<Movies.ResultModel>
}

export namespace Movies {
  export type ResultModel = MoviesResultModel
}
