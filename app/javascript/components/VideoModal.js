import React from 'react';
import { Component } from 'react';
import { Modal } from 'react-bootstrap';
import YoutubePlaylistVideo from './YoutubePlaylistVideo';
import YOUTUBE_API_KEY from './Api_keys';
import axios from "axios"

const PLAYLIST_URL = `https://www.googleapis.com/youtube/v3/playlistItems`
const playlistId = `PLVpJ_ku_DBpYQCtNK7pyuGW30kEbfC4bU`

const options =  {
  part: `snippet`,
  key: YOUTUBE_API_KEY,
  maxResults: 15,
  playlistId: playlistId
}

class VideoModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      data: [],
      error: null,
  
    };
    
    this.getVideoData = this.getVideoData.bind(this)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.getVideoData()
    
  }
  
  getVideoData() {
    axios.get(PLAYLIST_URL, {
      params: options
    }).then(res => {
      this.setState({
        data: res.data.items.map(data => (
          data.snippet.resourceId.videoId)
        )
      })
    }).catch(error => this.setState({ error }))
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
        <button id="VideoButton" onClick={this.handleShow}>
          Watch Better
        </button>
        
        <Modal id="videoModal" show={this.state.show} onHide={this.handleClose}>
          <Modal.Body className="player-wrapper">
            <YoutubePlaylistVideo data={this.state.data} />
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}

export default VideoModal;