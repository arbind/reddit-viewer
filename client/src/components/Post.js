import React, { Component } from 'react';

class Post extends Component {

  render() {
    const post = this.props.post;
    return (
      <li key={post.id}>
        {this.props.post.title}
      </li>
    );
  }
}

export default Post;
