import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'
import { counter } from './counter'
import { login } from './login'

// const history = createBrowserHistory()

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    // rest of your reducers
    counter,
    login
})

export default createRootReducer