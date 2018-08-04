import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostDetailsPage from './pages/PostDetailsPage'
import NotFound from './pages/NotFound'

class App extends Component {
  render () {
    return <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route exact path='/posts/:id' component={PostDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  }
}

export default App