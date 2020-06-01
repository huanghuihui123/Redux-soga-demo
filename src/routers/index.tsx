import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'

import Home from '../pages/home'

class Routers extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect exact from='/' to='/home' />
                <Route path='/home' component={Home} />
            </Switch>
        )
    }
}

export default Routers