import { mockMovies } from './movies-result-models/mock-movie'
import { mockItems } from './movies-result-models/mock-item'

import { LoadMovies } from '../usecases/load-movies'

export const mockLoadMovies = (): LoadMovies.ResultModel => {
  const items = mockItems()
  const movies = mockMovies()
  return { items, movies }
}

export class LoadMoviesSpy implements LoadMovies {
  callsCount = 0
  moviesResponse = mockLoadMovies()

  async load(): Promise<LoadMovies.ResultModel> {
    this.callsCount++
    return this.moviesResponse
  }
}
