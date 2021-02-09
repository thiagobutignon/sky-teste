import { HttpClientSpy } from '@/data/test/mock-http'
import faker from 'faker'
import { RemoteLoadMovies } from '@/data/usecases'
import { mockLoadMovies } from '@/domain/test/mock-load-movies'

type SutTypes = {
  sut: RemoteLoadMovies
  httpClientSpy: HttpClientSpy<RemoteLoadMovies.ResultModel>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteLoadMovies.ResultModel>()
  const sut = new RemoteLoadMovies(url, httpClientSpy)
  return { sut, httpClientSpy }
}

describe('RemoteLoadMovies', () => {
  test('Should call HttpClient with correct URL and Method', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    httpClientSpy.response = {
      statusCode: 200,
      body: mockLoadMovies()
    }

    await sut.load()
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })
})
