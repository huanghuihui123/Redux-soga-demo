import { Action } from 'redux'
import * as TYPE from '../../actions/actionTypes'
import { songsItem } from '../../../interface/response'

interface SearchSongState {
    songCount: number,
    songs: songsItem[]
    error?: string
}

interface SearchSongAction extends Action {
    payload: {
        songCount: number
        songs: songsItem[]
        error?: string
    }
}

const initState: SearchSongState = { songCount: 0, songs: [] }

export const searchSong = (state = initState, action: SearchSongAction): SearchSongState => {
    switch (action.type) {
        case TYPE.SEARCH_SONG_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        case TYPE.SEARCH_SONG_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
