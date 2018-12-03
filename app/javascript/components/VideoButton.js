import React from 'react';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import YoutubeVideo from './YoutubeVideo'

class VideoButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      playing: false
  
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleClose() {
    this.setState({ show: false });

    
  }

  handleShow() {
    this.setState({ show: true });
    
    
  }

  render() {

    return (
      <div>
        <Button bsStyle="danger" bsSize="large" onClick={this.handleShow}>
          Watch Better
        </Button>
        <YoutubeVideo />
        
  
      </div>
    );
  }
}

export default VideoButton;