import cyjRequest from './request'
import { BASE_URL } from './request/config'
import localCaChe from '@/utilt/loadcaChe'

const cyjRequestinsterface = new cyjRequest({
  baseURL: BASE_URL,
  insterceptors: {
    RequestInterceptor: (config) => {
      const Token = localCaChe.getCaChe('token') ?? ''
      if (Token) {
        config.headers.Authorization = Token
      }
      return config
    },
    ResponseInterceptor: (res) => {
      return res.data
    }
  }
})

export default cyjRequestinsterface
