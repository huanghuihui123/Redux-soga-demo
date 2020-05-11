
import * as params from '../interface/params'
// import * as response from '../interface/response'
import http from './http'

export const login = (payload: params.LoginParams) => {
    return http.post(`/api/v1/back_mgr/login`, payload)
}
