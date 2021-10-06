import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import { PublicRoute } from './PublicRoute'

import { Home } from '../views/home/Home'
import { Movie } from '../views/movie/Movie'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/movie/:movieId"
            component={Movie}
            isAuthenticated={false}
          />
          <PublicRoute path="/" component={Home} isAuthenticated={false} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
