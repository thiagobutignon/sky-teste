import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http/http-client'
import { LoadMovies } from '@/domain/usecases/load-movies'

export class RemoteLoadMovies implements LoadMovies {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadMovies.ResultModel>
  ) {}

  async load (): Promise<RemoteLoadMovies.ResultModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    const remoteLoadMovies = httpResponse.body

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteLoadMovies
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadMovies {
  export type ResultModel = LoadMovies.ResultModel
}
