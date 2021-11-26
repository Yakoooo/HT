import cyjRequest from './request'
import { BASE_URL } from './request/config'

const cyjRequestinsterface = new cyjRequest({
  baseURL: BASE_URL,
  insterceptors: {
    RequestInterceptor: (config) => {
      console.log('构建的拦截' + config)
      //拦截放行
      return config
    },
    ResponseInterceptor: (res) => {
      console.log('构建的拦截')
      //拦截放行
      return res
    }
  }
})

export default cyjRequestinsterface
