import React from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router-dom'
import configureStore, { history } from './stores'
import Routers from './routers'

const store = configureStore(/* provide initial state if any */)
console.log(store)

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={Routers} />
      </ConnectedRouter>
    </Provider>
  )
}

export default App;
