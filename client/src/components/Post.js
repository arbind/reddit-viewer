import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import UpVoteButton from './UpVoteButton'
import DownVoteButton from './DownVoteButton'

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vote: {
        upVoted:false,
        downVoted:false
      }
    };
  }

  render() {
    const post = this.props.post;
    const detailsLink = `/posts/${post.id}`
    
    return (
      <li key={post.id}>
        <Link to={detailsLink}>{post.title}</Link>
        <div>
          <UpVoteButton post={post}/>
          <br/>
          count
          <br/>
          <DownVoteButton post={post}/>
        </div>
        <div>
        {post.text}
        </div>
        <hr/>
      </li>
    );
  }
}

export default Post;
