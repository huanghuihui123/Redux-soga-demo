import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'

import Home from '../pages/home'
import Login from '../pages/login'

class Routers extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect exact from='/' to='/login' />
                <Route path='/login' component={Login} />
                <Route path='/home' component={Home} />
            </Switch>
        )
    }
}

export default Routers