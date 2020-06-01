export interface songsItemAlbum {
    id: number
    name: string
}

export interface songsItem {
    id: number
    name: string
    duration: number
    album: songsItemAlbum
}

export interface SearchSongResponse {
    songCount: number
    songs: songsItem[]
}