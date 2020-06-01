 import { call, put } from 'redux-saga/effects'
import { ActionTypes } from '../actionStaticType'
import { Res } from '../../../interface/common'
import * as api from '../../../api'
import * as response from '../../../interface/response'
import * as TYPE from '../actionTypes'
import { commonSaga } from '../utils'



// action根据登录请求结果进行创建
export function* searchSong(action: ActionTypes['createSearchSong']) {
    try {
        // 请求登录
        const res: Res<response.SearchSongResponse> = yield call(api.searchSong, action.payload)
        console.log(res)
        // 判断请求是否成功
        if (res.code === 200) {
            // 获得返回值,存储到store里面去
            yield put({
                type: TYPE.SEARCH_SONG_SUCCESS,
                payload: res.result
            })

        } else {
            yield put({
                type: TYPE.SEARCH_SONG_FAILURE,
                error: res.msg
            })
        }
    } catch (error) {
        yield put({
            type: TYPE.CATCH_SOME_ERROR_FAILURE,
            error: 'system error'
        })
    }
}

export default () => [
    commonSaga(TYPE.SEARCH_SONG_REQUEST, searchSong),
]