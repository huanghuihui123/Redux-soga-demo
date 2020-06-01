
import * as params from '../interface/params'
// import * as response from '../interface/response'
import http from './http'

// 搜索歌曲
export const searchSong = (payload: params.SearchSongParams) => {
    return http.get(`http://localhost:3000/search?keywords=${payload.keywords}`)
}

