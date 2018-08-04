import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import PostList from '../components/PostList.js';

class PostListingsPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Reddit Viewer</h1>
        </header>
        <PostList/>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default PostListingsPage;
