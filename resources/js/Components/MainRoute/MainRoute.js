import React from 'react'
import Home from './../Pages/Home'
import About from './../Pages/About'
import Contract from './../Pages/Contract'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

const MainRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/contract">
                    <Contract/>
                </Route>
            </Switch>
        </Router>
    )
}

export default MainRoute