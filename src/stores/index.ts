

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './reducers'
import rootSaga from './actions'
// import loginSoga from './actions/login'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

function configureStore() {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    {},
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
        sagaMiddleware
      ),
    ),
  )

  sagaMiddleware.run(rootSaga)

  // store.subscribe(() =>
  //   console.log(store.getState())
  // );


  return store
}

export default configureStore
