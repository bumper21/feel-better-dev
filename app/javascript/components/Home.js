import React from 'react';
import { Component } from 'react'
import ExerciseModal from './FeelBetterModal';
import JournalModal from './JournalModal';
import VideoButton from './VideoButton';
import YOUTUBE_API_KEY from './Api_keys';
import YoutubeVideo from './YoutubeVideo';
import axios from "axios"


const PLAYLIST_URL = `https://www.googleapis.com/youtube/v3/playlistItems`
const playlistId = `PLVpJ_ku_DBpYQCtNK7pyuGW30kEbfC4bU`

const options =  {
  part: `snippet`,
  key: YOUTUBE_API_KEY,
  maxResults: 10,
  playlistId: playlistId
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      data: [],
  
    };

     this.getVideoData = this.getVideoData.bind(this)
     this.toggle = this.toggle.bind(this)
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

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render () {
    return (
      <div>
        <div id="buttonsDiv">
          <ExerciseModal />
          <JournalModal />
          <VideoButton toggle={this.toggle} />
        </div>
        <div id="videoDiv">
          { this.state.show && <YoutubeVideo data={ this.state.data } /> }
        </div>
      </div>
    )
  }
}

export default Home