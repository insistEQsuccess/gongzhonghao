import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL

const instance = axios.create({
  baseURL,
  timeout: 10000
})

instance.interceptors.request.use(
  // 在发送请求之前做什么
  config => {
    if (config.method === 'post') {
      // post请求需要序列化
      config.data = qs.stringify(config.data)
    }
    return config
  },
  // 对请求错误做点什么
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  // 对响应数据做点什么
  response => {
    response.status === 200 ? Promise.resolve(response) : Promise.reject(response)

  },
  // 对响应错误做点什么
  error => {
    const {response}=error;
    errorHandle(response.status,response.info)
  }
)

const errorHandle=(status,info)=>{
  switch(status){
      case 400:
          console.log('语义有误，当前去请求无法被服务器理解！');
          break;
      case 401:
          // token
          console.log('服务器认证错误！当前请求需要用户验证。');
          break;
      case 403:
          console.log('服务器已经理解请求，但拒绝执行！');
          break;
      case 404:
          console.log('请检查网络请求地址');
          break;
      case 500:
          console.log('服务器遇到了一个未曾预料的状况，导致它无法完成对请求的处理。');
          break;
      case 502:
          console.log('作为网关或者代理的服务器尝试请求时，从上游服务器接收到无效的响应');
          break;
      default:
          console.log(info);
          break;
  }
}

export const post = () => instance.post()