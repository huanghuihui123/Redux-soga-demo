import { call, put, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from '../actionStaticType'
import { Res } from '../../../interface/common'
import * as api from '../../../api'
import * as response from '../../../interface/response'
import * as TYPE from '../actionTypes'


// action根据登录请求结果进行创建
export function* login(action: ActionTypes['createLogin']) {
    try {
        // 请求登录
        console.log(22222)
        const res: Res<response.LoginResponse> = yield call(api.login, action.payload)
        // 检测是否登录状态
        if (res.success) {
            // 获得返回值,存储到sessionStorage里面去
            sessionStorage.setItem('token', res.data!.token)
            sessionStorage.setItem('username', res.data!.name)
            // 获得返回值,存储到store里面去
            yield put({
                type: TYPE.LOGIN_SUCCESS,
                payload: {
                    token: res.data!.token,
                    name: res.data!.name
                }
            })
            yield call(action.callback, res.data!.is_first_login)
        } else {
            yield put({
                type: TYPE.LOGIN_FAILURE,
                error: res.info
            })
        }
        // 获得登录结果,执行回调函数
    } catch (error) {
        yield put({
            type: TYPE.CATCH_SOME_ERROR_FAILURE,
            error: 'system error'
        })
    }
}

function* LoginSoga() {
    yield takeEvery(TYPE.LOGIN_REQUEST, login)
}

export default LoginSoga