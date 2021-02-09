import { mockMoviesResultModel } from '@/domain/test'
import { LoadMovies } from '../usecases/load-movies'

export const mockLoadMovies = (): LoadMovies.ResultModel => {
  return (mockMoviesResultModel())
}

export class LoadMoviesSpy implements LoadMovies {
  callsCount = 0
  moviesResponse = mockLoadMovies()

  async load (): Promise<LoadMovies.ResultModel> {
    this.callsCount++
    return this.moviesResponse
  }
}
