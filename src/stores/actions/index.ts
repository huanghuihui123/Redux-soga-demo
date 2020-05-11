import { all } from 'redux-saga/effects'
import LoginSoga from './login'

export default function* rootSaga() {
  yield all([LoginSoga])
}
