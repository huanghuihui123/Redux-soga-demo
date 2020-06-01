import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'
import { counter } from './counter'
import { searchSong } from './songs'

// const history = createBrowserHistory()

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    // rest of your reducers
    counter,
    searchSong
})

export default createRootReducer