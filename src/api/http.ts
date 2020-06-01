import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

// 公共配置
const http: AxiosInstance = axios.create({
    baseURL: `/`,
    timeout: 1000,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
});

// 请求拦截
http.interceptors.request.use((config: AxiosRequestConfig) => {
    // console.log(config)
    // const token = sessionStorage.getItem('token')
    // const isLogin = config.url?.includes('login')
    // config.headers.Token = token
    // if (!isLogin && !token) {
    //     window.location.replace('/login')
    // }
    return config
}, (error: AxiosError) => {
    return Promise.reject(error)
})

// 响应拦截
http.interceptors.response.use((response: AxiosResponse) => {
    // Do something with response data
    // console.log(response)
    return response.data;
}, (error: AxiosError) => {
    // Do something with response error
    // console.log(error)
    // if (!error.response) {
    //     window.location.replace('/noNetwork')
    // }
    // if (error.response!.status === 403) {
    //     setTimeout(() => {
    //         sessionStorage.clear()
    //         window.location.replace('/login')
    //     }, 2000)
    // }
    return error.response
})

export default http