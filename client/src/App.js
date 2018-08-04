import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostListingsPage from './pages/PostListingsPage'
import PostDetailsPage from './pages/PostDetailsPage'
import NotFound from './pages/NotFound'

class App extends Component {
  render () {
    return <Router>
      <Switch>
        <Route path='/' exact component={PostListingsPage} />
        <Route exact path='/posts/:id' component={PostDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  }
}

export default App