import { HttpRequest, HttpResponse, HttpClient } from '@/data/protocols/http'

import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
  async request (data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: {
          ...data.headers,
          AccessControlAllowOrigin: '*',
          AccessControlAllowHeaders: 'Origin, Content-Type, Authorization',
          AccessControlAllowMethods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          ContentType: 'application/json'
        }
      })
    } catch (error) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
