import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Post extends Component {

  render() {
    const post = this.props.post;
    const detailsLink = `/posts/${post.id}`
    return (
      <li key={post.id}>
        <Link to={detailsLink}>{this.props.post.title}</Link>
      </li>
    );
  }
}

export default Post;
