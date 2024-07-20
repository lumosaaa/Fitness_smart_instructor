// 接口基地址
const baseURL = ''

export interface Data<T> {
  code: string
  data: T
  msg: string
}

const httpInterceptor = {
  //拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非http开头需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2. 设置超时时间，默认10s
    options.timeout = 10000
    // 4. 添加token请求头标识
    // const userInfoStore = useUserInfoStore()
    options.header = {
      ...options.header,
      // 自动添加token
      ['Authorization']: '' || '',
    }
  },
}

// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)

// 添加请求拦截器
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        // 状态码 2xx，参考 axios 的设计
        if (res.statusCode >= 200 && res.statusCode < 300) {

          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
          // const userInfoStore = useUserInfoStore()
          // userInfoStore.clearUserInfo()
          // uni.switchTab({ url: '/pages/mine/index' })
          uni.showToast({
            title: '请先登录!',
            icon: 'none',
          })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}
