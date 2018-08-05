import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faArrowDown } from '@fortawesome/free-solid-svg-icons'

class DownVoteButton extends Component {

  constructor(props) {
    super(props);
    const defaultVote = {
      up_voted:false,
      down_voted:false
    };
    const post = this.props.post || {}
    const vote = post.vote|| defaultVote;
    this.state = { vote: vote };
    this.evToggleDownVote = this.evToggleDownVote.bind(this);
  }

  evToggleDownVote(ev) {
    let vote = this.state.vote;
    vote.up_voted = false;
    vote.down_voted = !vote.down_voted;
    let payload = {vote: vote};
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    this.setState(payload);
    let options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload)
    };
    const post = this.props.post;
    let endpoint = `/api/v1/posts/${post.id}/votes`;
    window.fetch(endpoint, options)
      .then(response => response.json())
      .then(json => this.setState({vote: json}))
      .catch(error => console.log(error));
    // const vote = this.state.vote
    // vote.down_voted = !vote.down_voted
    // this.setState({vote: vote})
    // const post = this.props.post;
    // console.log("Down" + post.id);
  }

  renderAddADownVoteButton() {
    return <FontAwesomeIcon icon={faArrowDown} onClick={this.evToggleDownVote}/>
  }
  renderRemoveDownVoteButton() {
    return <FontAwesomeIcon icon={faArrowCircleDown} onClick={this.evToggleDownVote}/>
  }

  render() {
    if(this.state.vote.down_voted)
      return this.renderRemoveDownVoteButton();
    else
      return this.renderAddADownVoteButton();
  }
}

export default DownVoteButton;
