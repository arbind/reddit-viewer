import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faArrowUp } from '@fortawesome/free-solid-svg-icons'

class UpVoteButton extends Component {

  constructor(props) {
    super(props);
    const defaultVote = {
      up_voted:false,
      down_voted:false
    };
    const post = this.props.post || {}
    const vote = post.vote|| defaultVote;
    this.state = { vote: vote };
    this.evToggleUpVote = this.evToggleUpVote.bind(this);
  }

  evToggleUpVote(ev) {
    let vote = this.state.vote;
    vote.up_voted = !vote.up_voted;
    vote.down_voted = false;
    let payload = {vote: vote};
    this.setState(payload);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
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
  }

  renderAddAnUpVoteButton() {
    return <FontAwesomeIcon icon={faArrowUp} onClick={this.evToggleUpVote}/>
  }

  renderRemoveUpVoteButton() {
    return <FontAwesomeIcon icon={faArrowCircleUp} onClick={this.evToggleUpVote}/>
  }

  render() {
    if(this.state.vote.up_voted)
      return this.renderRemoveUpVoteButton();
    else
      return this.renderAddAnUpVoteButton();
  }
}

export default UpVoteButton;
