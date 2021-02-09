import { mockMovieGenerics } from '@/domain/test/movies-result-models'
import { MoviesResultModel } from '@/domain/models'

export const mockMoviesResultModel = (): MoviesResultModel => ({
  response: mockMovieGenerics()
})
