import { all } from 'redux-saga/effects'
import earchSongSoga from './home'

export default function* rootSaga() {
  yield all([...earchSongSoga()])
}
