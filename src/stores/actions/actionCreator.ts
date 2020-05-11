import * as params from '../../interface/params'
import { Callback } from '../../interface/common'
import * as TYPE from './actionTypes'


export const createLogin = (payload: params.LoginParams, callback: Callback) => {
    return {
        type: TYPE.LOGIN_REQUEST,
        payload,
        callback
    }
}