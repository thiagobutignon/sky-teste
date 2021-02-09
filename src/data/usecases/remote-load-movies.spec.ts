import { HttpStatusCode } from '@/data/protocols/http'
import { mockLoadMovies } from '@/domain/test'
import { UnexpectedError } from '@/domain/errors'
import { HttpClientSpy } from '@/data/test/mock-http'
import faker from 'faker'
import { RemoteLoadMovies } from '@/data/usecases'

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
      statusCode: 200
    }

    await sut.load()
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should throw UnexpectedError if HttpClient not returns 200', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    httpClientSpy.response = {
      statusCode: faker.random.number()
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return mockLoadMovies if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockLoadMovies()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const loadMovies = await sut.load()
    expect(loadMovies).toEqual(httpResult)
  })
})
