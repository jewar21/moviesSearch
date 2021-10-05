import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";

import { PublicRoute } from './PublicRoute'

import { Home } from '../views/home/Home';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/" component={Home} isAuthenticated={false} />
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    )
}
