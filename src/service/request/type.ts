import type { AxiosRequestConfig, AxiosResponse } from 'axios'

//创建接口 ， 可以接受构建期间的拦截器
export interface cyjRequestInterceptors<T = AxiosResponse> {
  RequestInterceptor?: (config: any) => any
  RequestInterceptorCatch?: (error: any) => any
  ResponseInterceptor?: (res: T) => T
  ResponseInterceptorCatch?: (error: any) => any
}

//继承配置类型 和 写入构建期间的拦截器
export interface cyjRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  insterceptors?: cyjRequestInterceptors<T>
}
