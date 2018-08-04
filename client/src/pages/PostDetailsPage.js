import React, { Component } from 'react';

class PostDetailsPage extends Component {
  render() {
    console.log(this.props)
    console.log(this.props.match)
    console.log(this.props.match.params)
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
