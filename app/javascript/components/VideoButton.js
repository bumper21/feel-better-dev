import React from 'react';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import YoutubeVideo from './YoutubeVideo';
import axios from "axios"

const PLAYLIST_URL = `https://www.googleapis.com/youtube/v3/playlistItems`

const apiKey = `AIzaSyDG83HUAOx9kyRPjYT0_o7nBxHal2U-of8`
const playlistId = `PLVpJ_ku_DBpYQCtNK7pyuGW30kEbfC4bU`

const options =  {
  part: `snippet`,
  key: apiKey,
  maxResults: 10,
  playlistId: playlistId
}

// console.log(this.state.data[0].snippet.resourceId.videoId)

class VideoButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      data: []
  
    };

    this.toggle = this.toggle.bind(this)
    this.getVideoData = this.getVideoData.bind(this)
  }

  componentDidMount() {
    this.getVideoData()
  
  }

  getVideoData() {
    axios.get(PLAYLIST_URL, {
      params: options
    }).then(res => {
      this.setState({
        data: res.data.items
      })
      // console.log(this.state.data)
    })
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
          <div id="VideoDiv">
            { this.state.show && <YoutubeVideo data={ this.state.data }/>}
          </div>
      </div>
    );
  }
}

export default VideoButton;