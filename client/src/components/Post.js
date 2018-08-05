import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import UpVoteButton from './UpVoteButton'
import DownVoteButton from './DownVoteButton'
import ReactMarkdown from 'react-markdown'

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
      <div className="post-card col-md-4" key={post.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={detailsLink}>{post.title}</Link>
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Card subtitle
            </h6>
            <ReactMarkdown source={post.text}/>
            <div className="card-footer">
              <UpVoteButton post={post}/>
              count
              <DownVoteButton post={post}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
