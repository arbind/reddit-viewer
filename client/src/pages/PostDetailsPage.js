import React, { Component } from 'react';

class PostDetailsPage extends Component {
  render() {
    const { match: { params } } = this.props;
    const post_id = params.id
    return (
      <div>
        <h2> Post Details For {post_id} </h2>
      </div>
    );
  }
}

export default PostDetailsPage;
