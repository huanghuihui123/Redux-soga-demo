import * as params from '../../interface/params'
// import { Callback } from '../../interface/common'
import * as TYPE from './actionTypes'

export const createCounter = (type: string) => {
    return {
        type
    }
}

export const createSearchSong= (payload: params.SearchSongParams) => {
    return {
        type: TYPE.SEARCH_SONG_REQUEST,
        payload
    }
}