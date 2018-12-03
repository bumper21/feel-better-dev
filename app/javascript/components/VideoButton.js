import React from 'react';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import YoutubeVideo from './YoutubeVideo'

class VideoButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
  
    };

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  

  render() {

    return (
      <div>
        <Button bsStyle="danger" bsSize="large" onClick={this.toggle}>
          Watch Better
        </Button>
        { this.state.show && <YoutubeVideo />}
        
  
      </div>
    );
  }
}

export default VideoButton;