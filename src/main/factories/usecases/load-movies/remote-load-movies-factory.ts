import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { LoadMovies } from '@/domain/usecases'
import { RemoteLoadMovies } from '@/data/usecases'

export const makeRemoteLoadMovies = (): LoadMovies => {
  return new RemoteLoadMovies(makeApiUrl('/movies'), makeAxiosHttpClient())
}
