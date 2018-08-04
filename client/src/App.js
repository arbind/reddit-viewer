import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor () {
    super()
    this.state = {posts: []}
  }

 componentDidMount() {
    window.fetch('/api/v1/posts')
      .then(response => response.json())
      .then(json => this.setState({posts: json}))
      .catch(error => console.log(error));
  }
  
  render() {
    const posts = this.state.posts.map((post) =>
      <li key={post.id}>
        {post.id}
      </li>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>{posts}</ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
