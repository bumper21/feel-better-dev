import React from 'react';
import { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import YoutubeVideo from './YoutubeVideo';
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
      // loading: true,
      show: false,
      data: []
  
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
        data: res.data.items
      })
    })
  }


  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if(this.state.data === []) { return }
    
    return (
      <div className="modal-container">
        <button id="VideoButton" onClick={this.handleShow}>
          View Better
        </button>

        <Modal id="videoModal" show={this.state.show} onHide={this.handleClose}>
          <Modal.Body className="player-wrapper">
            <YoutubeVideo data={this.state.data} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default VideoModal;