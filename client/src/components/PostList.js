import React, { Component } from 'react';
import Post from './Post.js';

class PostList extends Component {
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
      <Post post={post}/>
    );

    return (
      <ul>{posts}</ul>
    );
  }
}

export default PostList;
