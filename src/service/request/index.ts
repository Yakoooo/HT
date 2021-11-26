import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { cyjRequestInterceptors, cyjRequestConfig } from './type'

class cyjRequest {
  // 创建实例 和 拦截器；
  instance: AxiosInstance
  interceptors?: cyjRequestInterceptors
  constructor(config: cyjRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.insterceptors

    //初始化的拦截器接受的本来就是函数，这里裁开了
    this.instance.interceptors.request.use(
      this.interceptors?.RequestInterceptor,
      this.interceptors?.RequestInterceptorCatch
    )
    //初始化的拦截器接受的本来就是函数，这里裁开了
    this.instance.interceptors.response.use(
      this.interceptors?.ResponseInterceptor,
      this.interceptors?.ResponseInterceptorCatch
    )

    //全局的拦截器
    this.instance.interceptors.request.use((config) => {
      console.log('全局的拦截器')
      return config
    })
  }

  request<T>(config: cyjRequestConfig<T>): Promise<T> {
    return new Promise((resolve, rejece) => {
      //获取拦截
      //获取值，然后返回修改值 和axios的拦截器功能不太一样
      if (config.insterceptors?.RequestInterceptor) {
        config = config.insterceptors.RequestInterceptor(config)
      }

      this.instance
        .request<unknown, T>(config)
        .then((res) => {
          //局部拦截
          //获取值，然后返回修改值 和axios的拦截器功能不太一样
          if (config.insterceptors?.ResponseInterceptor) {
            res = config.insterceptors.ResponseInterceptor(res)
            resolve(res)
          }
          console.log(res)
        })
        .catch((err) => {
          rejece(err)
        })
    })
  }
}

export default cyjRequest
