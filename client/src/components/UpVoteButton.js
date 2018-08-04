import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class UpVoteButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vote: {
        upVoted:false,
        downVoted:false
      }
    };

    this.evToggleUpVote = this.evToggleUpVote.bind(this);
  }

  evToggleUpVote(ev) {
    const vote = this.state.vote;
    vote.upVoted = !vote.upVoted;
    this.setState({vote: vote});
    const post = this.props.post;
    console.log("Up " + post.id);
  }

  renderAddAnUpVoteButton() {
    return <button onClick={this.evToggleUpVote}>Add an Up vote</button>;
  }

  renderRemoveUpVoteButton() {
    return <button onClick={this.evToggleUpVote}>Remove Up Vote</button>;
  }

  render() {
    const post = this.props.post;
    if(this.state.vote.upVoted)
      return this.renderRemoveUpVoteButton();
    else
      return this.renderAddAnUpVoteButton();
  }
}

export default UpVoteButton;
