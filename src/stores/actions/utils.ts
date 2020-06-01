import { takeLatest } from 'redux-saga/effects'

export function* commonSaga(type: any, func: (action: any) => any) {
  yield takeLatest(type, func)
}