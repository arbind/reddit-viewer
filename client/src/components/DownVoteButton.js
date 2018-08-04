import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class DownVoteButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vote: {
        upVoted:false,
        downVoted:false
      }
    };

    this.evToggleDownVote = this.evToggleDownVote.bind(this);
  }

  evToggleDownVote(ev) {
    const vote = this.state.vote
    vote.downVoted = !vote.downVoted
    this.setState({vote: vote})
    const post = this.props.post;
    console.log("Down" + post.id);
  }

  renderAddADownVoteButton() {
    return <button onClick={this.evToggleDownVote}>Add an Down vote</button>;
  }

  renderRemoveDownVoteButton() {
    return <button onClick={this.evToggleDownVote}>Remove Down Vote</button>;
  }

  render() {
    const post = this.props.post;
    if(this.state.vote.downVoted)
      return this.renderRemoveDownVoteButton();
    else
      return this.renderAddADownVoteButton();
  }
}

export default DownVoteButton;
